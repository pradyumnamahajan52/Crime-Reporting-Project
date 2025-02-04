//package site.crimereporting.security;
//
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.stereotype.Component;
//
//import java.util.Date;
//
//@Component
//public class JwtUtil {
//	private final String SECRET_KEY = "X7PNVjAFQtYFZkmJBXGzrusU+6EgRxpMs06/4ssk++rkcYEjT9lMt+sdnOsgqcxJ\r\n";
//
//	public String generateToken(String email) {
//		return Jwts.builder().setSubject(email).setIssuedAt(new Date())
//				.setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 hour expiry
//				.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
//	}
//}


package site.crimereporting.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class JwtUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);

    // Injecting the JWT secret key and expiration time from application.properties
    @Value("${spring.security.jwt.secret.key}")
    private String jwtSecret;

    @Value("${spring.security.jwt.exp.time}")
    private int jwtExpirationMs;

    // The actual secret key used to sign the JWT token
    private Key key;

    // Method to initialize the key after properties are loaded
    @PostConstruct
    public void init() {
        if (jwtSecret == null || jwtSecret.isEmpty()) {
            throw new IllegalStateException("JWT secret is not configured in application.properties");
        }
        // Convert the secret key string to a Key object using HMAC-SHA algorithm
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    // Method to generate JWT token from Authentication object
    public String generateToken(Authentication authentication) {
        // Get the username (email in this case) and authorities (roles)
        String email = authentication.getName();
        List<String> authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        // Build and return the JWT token with claims (email, authorities, expiration, etc.)
        return Jwts.builder()
                .setSubject(email) // Set the subject to email (username)
                .setIssuedAt(new Date()) // Set the issue date to current date
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs)) // Set expiration time
                .claim("authorities", String.join(",", authorities)) // Add the authorities as a claim
                .signWith(key, SignatureAlgorithm.HS512) // Sign the token with the secret key using HS512 algorithm
                .compact(); // Return the JWT token as a string
    }
    
 // Overloaded method to generate token using only email
    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }


    // Method to validate the JWT token and parse claims
    public Claims validateToken(String token) {
        try {
            // Parse and return the claims from the token
            return Jwts.parserBuilder()
                    .setSigningKey(key) // Use the secret key to verify the token's signature
                    .build()
                    .parseClaimsJws(token) // Parse the JWT token and retrieve the claims
                    .getBody(); // Return the claims body
        } catch (Exception e) {
            // Log the error
            logger.error("JWT token validation failed", e);
            // Return null in case of invalid or expired token
            return null;
        }
    }

    // Method to extract the email from the claims of the token
    public String getEmailFromToken(Claims claims) {
        return claims.getSubject(); // The email is stored as the subject in the claims
    }

    // Method to extract authorities from the token's claims
    public List<GrantedAuthority> getAuthoritiesFromToken(Claims claims) {
        // Get the authorities as a comma-separated string and convert them to GrantedAuthority objects
        String authoritiesString = (String) claims.get("authorities");
        return AuthorityUtils.commaSeparatedStringToAuthorityList(authoritiesString);
    }

    // Method to get the Authentication object from a JWT token
    public Authentication getAuthenticationFromToken(String token) {
        // Validate the token and extract claims
        Claims claims = validateToken(token);
        if (claims == null) {
            return null; // If token is invalid, return null
        }

        // Extract email and authorities from the claims
        String email = getEmailFromToken(claims);
        List<GrantedAuthority> authorities = getAuthoritiesFromToken(claims);

        // Return a new UsernamePasswordAuthenticationToken containing the extracted email and authorities
        return new UsernamePasswordAuthenticationToken(email, null, authorities);
    }
}
