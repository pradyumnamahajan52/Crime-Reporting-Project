package site.crimereporting.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Custom filter for JWT-based authentication that executes once per request
 */
@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtUtil jwtUtil;
    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        // 1. Check authorization header from incoming request
        String authHeader = request.getHeader("Authorization");
        
        // 2. Check if its not null and starts with "Bearer "
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            // 3. Extract JWT
            String jwt = authHeader.substring(7);
            System.out.println("Bearer "+jwt);
            
            // 4. Use JwtUtil to validate token and get Authentication object
            Authentication authentication = jwtUtil.getAuthenticationFromToken(jwt);
            System.out.println("authentication "+ authentication);
            // 5. If authentication is valid, store it in SecurityContextHolder
            if (authentication != null) {
                SecurityContextHolder.getContext().setAuthentication(authentication);
                System.out.println("Saved auth details under spring security context!");
            }
        }
        
        // Continue with remaining filter chain
        filterChain.doFilter(request, response);
    }
}