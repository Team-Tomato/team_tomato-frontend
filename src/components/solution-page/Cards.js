import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import CardData from './projects.json';
import './Cards.css';

<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9P1N4S2307"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9P1N4S2307');
</script>
</head>

class Cards extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {CardData.map((cardDetail)=> {
                            return <Col xs={12} md={6} lg={4}> <ProjectCard name={cardDetail.projectName} desc={cardDetail.projectDesc} image={cardDetail.projectImage} demoUrl={cardDetail.demoUrl} githubUrl={cardDetail.githubUrl}  isCompleted={cardDetail.isCompleted}/> </Col>
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Cards;