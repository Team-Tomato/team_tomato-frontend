import React from 'react';
import {Card, Button } from 'react-bootstrap';
import "./ProjectCard.css";
import Fade from 'react-reveal/Fade';

class ProjectCard extends React.Component{
    render(){
        return(
            <Fade bottom>
                <Card className="mx-auto d-block my-5 ProjectCard-card">
                    <Card.Img variant="top" src={this.props.image} className="img-fluid ProjectCard-image" style={{height: '15rem', width:'18rem'}} alt={this.props.projectName}/>
                    <Card.Body className="w-10 h-10">
                    <Card.Title><strong>{this.props.name}</strong></Card.Title>
                    <Card.Text>{this.props.desc}</Card.Text>
                    <a href={this.props.demoUrl}><Button variant="success" className="m-1" disabled={!this.props.isCompleted}> {this.props.isCompleted ? "Demo" : "In Progress"}</Button></a>
                    <a href={this.props.githubUrl}><Button variant="danger" className="m-1">Github</Button></a>
                    </Card.Body>
                </Card>
            </Fade>
        );
    }
}

export default ProjectCard;