import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option";

export const creol = () => {
  return (
    <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {projectData.creol.title} </title>{" "}
        <meta name="description" content={projectData.creol.title} />
      </Helmet>
      <ProjectPage
      title={projectData.creol.title}
      description={projectData.creol.description}
      image={projectData.creol.image}
       />
       </Container>
       </HelmetProvider>
    
  )
}