package site.crimereporting.dtos;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
public class ApiResponse<T> {
    private LocalDateTime timeStamp;
    private String message;
    private T data;

    public ApiResponse(String message,T data) {
        super();
        this.message = message;
        this.data=data;
        this.timeStamp=LocalDateTime.now();
    }
}
