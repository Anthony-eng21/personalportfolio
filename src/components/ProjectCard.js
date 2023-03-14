import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imageUrl} alt="project" />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span className="wrap">{description}</span>
        </div>
      </div>
    </Col>
  );
};
