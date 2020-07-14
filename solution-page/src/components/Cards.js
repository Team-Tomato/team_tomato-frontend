import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProjectCard from './ProjectCard'
import CardData from '../projects.json'
import './Cards.css'

class Cards extends Component {
    render() {
        return (
            <Container>
                <Row>
                    {CardData.map((cardDetail)=> {
                        return <Col xs={12} md={6} lg={4}> <ProjectCard name={cardDetail.projectName} desc={cardDetail.projectDesc} image={cardDetail.projectImage} demoUrl={cardDetail.demoUrl} githubUrl={cardDetail.githubUrl}  isCompleted={cardDetail.isCompleted}/> </Col>
                    })}
                </Row>
            </Container>
        );
    }
}

export default Cards;