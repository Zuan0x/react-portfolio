import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta, projects } from "../../content_option";
import { Gallery } from "react-grid-gallery";
import { useHistory } from "react-router-dom"

//Position caption centrally
const images = projects.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      
      <div style={{ width: "100%", height: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h3>{image.caption.toUpperCase()}</h3>
        {/* {image.chips &&
        image.chips.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))} */}
      </div>
      
    </div>
  ),
}));

export const Portfolio = () => {
  const history = useHistory()
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Gallery 
        images={images} 
        enableImageSelection={false}
        onClick={(e)=>{history.push(projects[e].link)}}
        margin={8}
        rowHeight={280}
        />
      </Container>
    </HelmetProvider>
  );
};
