import React from "react";
import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProjectPage } from "../portfolio/projectPage"
import chatGPT from "../../assets/images/chatGPT.jpeg"

export const chatbot = () => {
    return (
        <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Chatbot </title>{" "}
          <meta name="description" content={"chatbot"} />
        </Helmet>
        <ProjectPage
        title="Chatbot"
        description="Recently, Ivy have been developing a custom-built LLM to answer guide project developers and investors through the confusing world of carbon projects"
        image={chatGPT}
         />
         </Container>
         </HelmetProvider>
    )
}