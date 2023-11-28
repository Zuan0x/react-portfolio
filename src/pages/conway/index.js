import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option";

export const conway = () => {
  return (
    <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {projectData.conway.title} </title>{" "}
        <meta name="description" content={projectData.conway.title} />
      </Helmet>
      <ProjectPage
            data={projectData.conway}
       />
       </Container>
       </HelmetProvider>
    
  )
}