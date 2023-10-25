import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom/cjs/react-router-dom";

export const ProjectPage = (data) => {
    return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.title}</title>{" "}
            <meta name="description" content={data.description} />
          </Helmet>
          <Link to="/portfolio">
            <AiOutlineArrowLeft style={{color: "white", height: "24px", width: "24px", cursor: "pointer"}} />
          </Link>
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
          <div>next proj</div>
        </Container>
      </HelmetProvider>
    )
}