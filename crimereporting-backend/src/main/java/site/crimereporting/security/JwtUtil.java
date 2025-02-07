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

    @Value("${spring.security.jwt.secret.key}")
    private String jwtSecret;

    @Value("${spring.security.jwt.exp.time}")
    private int jwtExpirationMs;

    private Key key;

    @PostConstruct
    public void init() {
        if (jwtSecret == null || jwtSecret.isEmpty()) {
            throw new IllegalStateException("JWT secret is not configured in application.properties");
        }
        key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }
    
    public String generateToken(Authentication authentication) {
        String email = authentication.getName(); // Get the email from the authentication object
        List<String> authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        // You can also set a default role, if needed, like so:
        if (authorities.isEmpty()) {
            authorities.add("USER"); // Default role if none exist
        }

        // Generate the JWT token
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .claim("authorities", String.join(",", authorities)) // Store authorities as comma-separated values
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public Claims validateToken(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            logger.error("JWT token validation failed", e);
            return null;
        }
    }

    public String getEmailFromToken(Claims claims) {
        return claims.getSubject();
    }

    public List<GrantedAuthority> getAuthoritiesFromToken(Claims claims) {
        String authoritiesString = (String) claims.get("authorities");
        if (authoritiesString == null || authoritiesString.isEmpty()) {
            return List.of();
        }
        return AuthorityUtils.commaSeparatedStringToAuthorityList(authoritiesString); // No role prefixing
    }

    public Authentication getAuthenticationFromToken(String token) {
        Claims claims = validateToken(token);
        if (claims == null) {
            return null;
        }

        String email = getEmailFromToken(claims);
        List<GrantedAuthority> authorities = getAuthoritiesFromToken(claims);

        logger.info("Extracted Email: " + email);
        logger.info("Extracted Authorities: " + authorities);

        return new UsernamePasswordAuthenticationToken(email, null, authorities);
    }
}
