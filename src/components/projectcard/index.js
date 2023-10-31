import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai"
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ProjectCard = ({data, next}) => {
  const history = useHistory();
  return (
    <div style={{ cursor: 'pointer' }} className="project_card" onClick={()=>{history.push(`${next}`)}}>
        <Row fluid={true} style={{disply:'flex', justifyContent:'center', alignItems: "center"}}>
          <Col>
        <img src={data.icon? data.icon : data.image? data.image : null} alt="Project image" style={{maxWidth: "100px"}}/>
        </Col>
        <Col xs={9}>
          <Row>
          <h4>{data.title}</h4>
          </Row>
          <Row>
          <p className="overflow_text">{data.description}</p>
          </Row>
          
        </Col>
        <Col xs={1} >
          <AiOutlineArrowRight style={{color: "white", height: "24px", width: "24px"}}/>
          </Col>
        </Row>
    </div>
  );
};

export default ProjectCard;
