import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option";

export const cookstoves = () => {
  return (
    <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {projectData.cookstoves.title} </title>{" "}
        <meta name="description" content={projectData.cookstoves.title} />
      </Helmet>
      <ProjectPage
            data={projectData.cookstoves}
       />
       </Container>
       </HelmetProvider>
    
  )
}