import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta, projects } from "../../content_option";
import { Gallery } from "react-grid-gallery";
import { useHistory } from "react-router-dom"

const images = [
  {
     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
     width: 320,
     height: 174,
     isSelected: true,
     caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
     width: 320,
     height: 212,
     tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
     ],
     alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
     width: 320,
     height: 212,
  },
];

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
        images={projects} 
        enableImageSelection={false}
        onClick={(e)=>{history.push(projects[e].link)}}//console.log(projects[e].link)}}
        margin={8}
        rowHeight={280}
        />
      </Container>
    </HelmetProvider>
  );
};
