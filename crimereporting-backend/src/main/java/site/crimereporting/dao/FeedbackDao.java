package site.crimereporting.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import site.crimereporting.entity.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback,Long> {

}
