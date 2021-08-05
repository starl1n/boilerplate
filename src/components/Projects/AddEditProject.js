import React from 'react';
import { Modal,Button } from '@themesberg/react-bootstrap';
const AddEditProject = props=>{
    return (
        <Modal show={props.show} onHide={props.toggle} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={props.toggle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AddEditProject;