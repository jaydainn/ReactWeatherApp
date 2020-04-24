import React from "react"
import {Card, CardImg, CardText, CardBody,
    CardTitle} from "reactstrap"

function ProjectCard(props){
    return (
        <div className="col-md-auto">
            <Card>
                <CardImg top width ="50px" src={props.data.img} />
                <CardBody>
                    <CardTitle>{props.data.title}</CardTitle>
                    <CardText>{props.data.description}</CardText>
                </CardBody>

            </Card>

        </div>
    )

}




export default ProjectCard