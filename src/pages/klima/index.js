import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import klimaImage from "../../assets/images/klima-dao.png"

export const klima = () => {
    return (
        <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> KlimaDAO </title>{" "}
          <meta name="description" content={"KlimaDAO"} />
        </Helmet>
        <ProjectPage
        title="KLIMA DAO"
        description="Integrating work we developed at Creol, we adapted an individual and business carbon footprint calculator for KlimaDAO, designed to help individuals engage and understand the impact of personal choices"
        image={klimaImage}
         />
         </Container>
         </HelmetProvider>
    )
}