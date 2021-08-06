import { Card, Row, Col } from '@themesberg/react-bootstrap';
import React from 'react';

const Projects = props=>{
    return (<>
    <Row>
        <Col xs={12}>
            <Card className="shadow-sm">
                <Card.Body>
                    Contenido
                </Card.Body>
            </Card>
        </Col>
    </Row>
    </>);
}

export default Projects;