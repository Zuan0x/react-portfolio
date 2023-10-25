import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option";

export const copilot = () => {
  return (
    <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {projectData.copilot.title} </title>{" "}
        <meta name="description" content={projectData.copilot.title} />
      </Helmet>
      <ProjectPage
      title={projectData.copilot.title}
      description={projectData.copilot.description}
      image={projectData.copilot.image}
       />
       </Container>
       </HelmetProvider>
    
  )
}