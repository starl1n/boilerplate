import React from 'react';
import { Row, Col, Card, Nav, Tabs, Tab } from '@themesberg/react-bootstrap';
import { useState } from '@hookstate/core';

const ProjectDetails = props => {
    const state = useState({
        selectedSection: "activityLog"
    });
    const selectedSection = selectedkey => {
        state.selectedSection.set(selectedkey);
    }
    return (<>

        <Row>
            <Col xs={12} xl={3}>
                <Card border="light" className="text-center p-0 mb-4">
                    <Card.Body>
                        <h5>Project Name</h5>
                        <p>Status: <div className="badge badge-primary">Completed</div></p>
                    </Card.Body>
                </Card>

                {/* MENU */}
                <Nav defaultActiveKey="/home" variant="pills" className="flex-column my-2"
                    onSelect={key => selectedSection(key)}
                >
                    <Nav.Link eventKey="activityLog" >Activity Log</Nav.Link>
                    <Nav.Link eventKey="files">Files</Nav.Link>
                    <Nav.Link eventKey="tasks">Tasks</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Col>
            <Col xs={12} xl={9}>
                {state.selectedSection.value === "activityLog" ?
                    <Card border="light" className="text-center p-0 mb-4">
                        <Card.Header>
                            <Card.Title>Activity Log</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            Content
                        </Card.Body>
                    </Card> : null
                }
                  {state.selectedSection.value === "files" ?
                    <Card border="light" className="text-center p-0 mb-4">
                        <Card.Header>
                            <Card.Title>Files</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            Content
                        </Card.Body>
                    </Card> : null
                }


            </Col>
        </Row>
    </>);
}

export default ProjectDetails;