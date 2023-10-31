import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option"

export const carbonFYI = () => {
  return (
    <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {projectData['carbon-fyi'].title} </title>{" "}
        <meta name="description" content={projectData['carbon-fyi'].title} />
      </Helmet>
      <ProjectPage
            data={projectData['carbon-fyi']}
       />
       </Container>
       </HelmetProvider>
    
  )
}