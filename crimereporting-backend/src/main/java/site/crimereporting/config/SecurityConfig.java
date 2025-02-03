package site.crimereporting.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/users/signin/email", "/users/signin", "/users/register/citizen", "/users/register/police","/", "/admin/{*}").permitAll()
                .anyRequest().authenticated()
            );
        return http.build();
    }
}
