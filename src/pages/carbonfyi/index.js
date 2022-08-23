import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import offsetraImage from "../../assets/images/offsetra.png"

export const carbonFYI = () => {
    return (
        <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Carbon.fyi </title>{" "}
          <meta name="description" content={"carbon.fyi"} />
        </Helmet>
        <ProjectPage
        title="carbon.fyi"
        description="In partnership with Offsetra, I've recently been helping rework the emissions calculations for the highly popular carbon.fyi app, used to calculate the CO2 emissions for a given address or smart contract"
        image={offsetraImage}
         />
         </Container>
         </HelmetProvider>
    )
}