package site.crimereporting.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString(callSuper = true)
@Getter
@Setter
public class FeedbackDTO extends BaseDTO {


    private String comments;

    private Short rating;


    private Long userId;

}
