import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option";

export const ivy = () => {
  return (
    <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {projectData.ivy.title} </title>{" "}
        <meta name="description" content={projectData.ivy.title} />
      </Helmet>
      <ProjectPage
      title={projectData.ivy.title}
      description={projectData.ivy.description}
      image={projectData.ivy.image}
       />
       </Container>
       </HelmetProvider>
    
  )
}