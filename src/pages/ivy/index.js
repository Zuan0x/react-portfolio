import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import { projectData } from "../../content_option";
import screenshot1 from "../../assets/screenshots/dashboard/dashboard-screenshot-1.png"
import screenshot2 from "../../assets/screenshots/dashboard/dashboard-screenshot-2.png"
import screenshot3 from "../../assets/screenshots/dashboard/dashboard-screenshot-3.png"
import screenshot4 from "../../assets/screenshots/dashboard/dashboard-screenshot-4.png"
import screenshot5 from "../../assets/screenshots/dashboard/dashboard-screenshot-5.png"
import screenshot6 from "../../assets/screenshots/dashboard/dashboard-screenshot-6.png"
import screenshot7 from "../../assets/screenshots/dashboard/dashboard-screenshot-7.png"
import screenshot8 from "../../assets/screenshots/dashboard/dashboard-screenshot-8.png"
import screenshot9 from "../../assets/screenshots/dashboard/dashboard-screenshot-9.png"
import screenshot10 from "../../assets/screenshots/dashboard/dashboard-screenshot-10.png"
import screenshot11 from "../../assets/screenshots/dashboard/dashboard-screenshot-11.png"
import screenshot12 from "../../assets/screenshots/dashboard/dashboard-screenshot-12.png"
import screenshot13 from "../../assets/screenshots/dashboard/dashboard-screenshot-13.png"
import screenshot14 from "../../assets/screenshots/dashboard/dashboard-screenshot-14.png"

const dashboardImages = [
  {
    src: screenshot1,
    height: 320,
    width: 640,
  },
  {
    src: screenshot2,
    height: 320,
    width: 640,
  },
  {
    src: screenshot3,
    height: 320,
    width: 640,
  },
  {
    src: screenshot4,
    height: 320,
    width: 640,
  },
  {
    src: screenshot5,
    height: 320,
    width: 640,
  },
  {
    src: screenshot6,
    height: 320,
    width: 640,
  },
  {
    src: screenshot7,
    height: 320,
    width: 640,
  },
  {
    src: screenshot8,
    height: 320,
    width: 640,
  },
  {
    src: screenshot9,
    height: 320,
    width: 640,
  },
  {
    src: screenshot10,
    height: 320,
    width: 640,
  },
  {
    src: screenshot11,
    height: 320,
    width: 640,
  },
  {
    src: screenshot12,
    height: 320,
    width: 640,
  },
  {
    src: screenshot13,
    height: 320,
    width: 640,
  },
  {
    src: screenshot14,
    height: 320,
    width: 640,
  },
]

const videoUrl = "https://youtu.be/REfMHFyfnwo"

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
            data={projectData.ivy}
            images={dashboardImages}
            videoUrl={videoUrl}
       />
       </Container>
       </HelmetProvider>
    
  )
}