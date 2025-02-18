package site.crimereporting.dtos;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class FeedbackRequestDTO {
    private String comments;
    private Short rating;

}
