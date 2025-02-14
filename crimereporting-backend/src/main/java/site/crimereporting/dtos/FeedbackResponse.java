package site.crimereporting.dtos;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import site.crimereporting.entity.Feedback;

@ToString(callSuper = true)
@Getter
@Setter
public class FeedbackResponse extends BaseDTO {

    private String comments;
    private Short rating;
    private String email;





}
