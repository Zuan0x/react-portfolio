import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom/cjs/react-router-dom";
import ProjectCard from "../../../components/projectcard";
import { Gallery } from "react-grid-gallery";
import { projectData } from "../../../content_option";
import GalleryLightbox from "../../../components/gallerylightbox";

export const ProjectPage = ({data, images}) => {
  const nextData = projectData[data.next];
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
            <h2>{data.title}</h2>
          </Row>
          <Row>
            <p>
              {data.description}
            </p>
            {
              data.link && (
                  <p>
                    A link to the project can be found <a href={data.link}>here</a>
                  </p>
              )
            }
          </Row>
          {
            data.skillChips && (
              <Row>
                {
                  data.skillChips.map((chip, i)=>{
                    return (
                      <span key={i} className="skill-chip">{chip}</span>
                    )
                  
                  })
                }
              </Row>
            )
          }
          {
            data.technicalDetails && (
              <div>
                <Row>
            <h2>Technical details</h2>
          </Row>
          <Row>
            <p>
              {data.technicalDetails}
            </p>
          </Row>
              </div>
            )
          }
          {
            images && (
              <GalleryLightbox images={images} />
            )
          }
          <ProjectCard data={nextData} next={data.next}/>
          <div style={{color: 'black'}}>-</div>
        </Container>
      </HelmetProvider>
    )
}