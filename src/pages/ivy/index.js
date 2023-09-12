import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import creolGif from "../../assets/images/LogoCropped.gif"

export const ivyDashboard = () => {
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
        description="Starting early 2020, Creol was one of the first developers of tokenised carbon and an underlying subscription service designed to give the public access to the Voluntary Carbon Market (VCM).
        Over the course of 2020-21 I worked at Creol developing smart contracts for tokenised carbon and an easy-to-use interface"
        image={creolGif}
         />
         </Container>
         </HelmetProvider>
    )
}