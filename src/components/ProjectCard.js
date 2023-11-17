import { Col } from "react-bootstrap";
import { ProjectContent } from "./ProjectContent";

export const ProjectCard = ({ title, description, imageUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <ProjectContent title={title} description={description} imageUrl={imageUrl} url={url} />
      </div>
    </Col>
  );
};
