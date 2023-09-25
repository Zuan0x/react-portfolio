import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import ivySplash from "../../assets/images/ivySplash.png"

export const ivy = () => {
    return (
        <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Ivy Dashboard </title>{" "}
          <meta name="description" content={"creol"} />
        </Helmet>
        <ProjectPage
        title="Creol"
        description="Starting in 2022 I've been working as Lead Engineer at Ivy Protocol, developing tools to reduce the roadblocks for early stage project developers. This culminated in the Ivy Dashboard - a one stop shop for project developers and stakeholders to message, share data, coordinate and much much more"
        image={ivySplash}
         />
         </Container>
         </HelmetProvider>
    )
}