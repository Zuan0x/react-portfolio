import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import bitgreenDashboard from "../../assets/images/bitgreen-dashboard.png"

export const bitgreen = () => {
    return (
        <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Bitgreen </title>{" "}
          <meta name="description" content={"creol"} />
        </Helmet>
        <ProjectPage
        title="Bitgreen"
        description="I was hired by Offsetra to produce an overview dashboard of the energy usage and carbon emissions of the Polkadot blockchain network for Bitgreen. The final dashboard gave users a breakdown of the parachains, subnetworks and the network as a whole."
        image={bitgreenDashboard}
         />
         </Container>
         </HelmetProvider>
    )
}