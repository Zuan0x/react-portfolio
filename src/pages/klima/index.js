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
          <title> Creol </title>{" "}
          <meta name="description" content={"creol"} />
        </Helmet>
        <ProjectPage
        title="KLIMA DAO"
        description="Reviving some of the work we developed at Creol, I've been adapting an individual and business carbon footprint calculator, designed to help individuals engage and understand the impact of personal choices. This calculator will be redirected to the KlimaDAO offseting page"
        image={klimaImage}
         />
         </Container>
         </HelmetProvider>
    )
}