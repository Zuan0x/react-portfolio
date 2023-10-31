import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option";
import screenshot1 from "../../assets/screenshots/co-pilot/co-pilot-screenshot-1.png"
import screenshot2 from "../../assets/screenshots/co-pilot/co-pilot-screenshot-2.png"
import screenshot3 from "../../assets/screenshots/co-pilot/co-pilot-screenshot-3.png"
import recording1 from "../../assets/screenshots/co-pilot/co-pilot-recording-1.mov"


const copilotImages = [
  {
    src: screenshot1,
    height: 320,
    width: 640
  },
  {
    src: screenshot2,
    height: 320,
    width: 640
  },
  {
    src: screenshot3,
    height: 320,
    width: 640
  },
  {
    src: recording1,
    height: 320,
    width: 640
  },
]

export const copilot = () => {
  return (
    <HelmetProvider>
    <Container className="About-header">
      <Helmet>
        <meta charSet="utf-8" />
        <title> {projectData['co-pilot'].title} </title>{" "}
        <meta name="description" content={projectData['co-pilot'].title} />
      </Helmet>
      <ProjectPage
      data={projectData['co-pilot']}
      images={copilotImages}
       />
       </Container>
       </HelmetProvider>
    
  )
}