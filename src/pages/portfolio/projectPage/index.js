import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

export const ProjectPage = (data) => {
    return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.title}</title>{" "}
            <meta name="description" content={data.description} />
          </Helmet>
          <Row className="mb-5 mt-3">
            <Col lg="8">
              <img src={data.image} alt="Project image" style={{maxHeight: "600px"}}/>
            </Col>
          </Row>
          <Row>
            <p>
              {data.description}
            </p>
          </Row>
        </Container>
      </HelmetProvider>
    )
}