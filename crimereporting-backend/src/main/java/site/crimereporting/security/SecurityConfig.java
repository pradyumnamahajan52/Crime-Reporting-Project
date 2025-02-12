//package site.crimereporting.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//	@Bean
//	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//		http.csrf().disable()
//				.authorizeHttpRequests(
//						auth -> auth
//								.requestMatchers("/users/signin/email", "/users/signin", "/users/register/citizen",
//										"/users/register/police", "/", "/admin/*")
//								.permitAll().anyRequest().authenticated());
//		return http.build();
//	}
//}

package site.crimereporting.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
//    @Autowired
//    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JWTAuthenticationFilter jWTAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Disable CSRF
            .csrf(csrf -> csrf.disable())
            
            // Configure URL based access
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers("/users/signin/email", 
                               "/users/signin", 
                               "/users/register/citizen",
                               "/users/register/police",
                               "/",
                               "/users/updatedetails",
//                               "/crimereport/newreport",
                               "/users/getPoliceStationUserDetails",
//                               "/crimereport/",
//                               "/admin/**",
                               "/v*/api-doc*/**",
                               "/swagger-ui/**")
                .permitAll()
                
                // Allow OPTIONS requests for CORS
                .requestMatchers(HttpMethod.OPTIONS)
                .permitAll()
                
                // Role-based access
                .requestMatchers("/citizen/**")
                .hasAuthority("CITIZEN")
                .requestMatchers("/police/**")
                .hasAuthority("POLICE")
                .requestMatchers("/admin/**")
                .hasAuthority("ADMIN")
                
                // All other requests need authentication
                .anyRequest()
                .authenticated()
            )
            
            // Set session management to stateless
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            );
        
        // Add JWT filter before authentication filter
        http.addFilterBefore(jWTAuthenticationFilter, 
                           UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}