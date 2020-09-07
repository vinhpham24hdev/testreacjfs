import React, { useState } from "react";
import { get } from "lodash";
import { Modal, Button, Table } from "react-bootstrap";

const ModalItem = ({ data, handleClose }) => {
  console.log(data);
  return (
    <>
      <Modal show onHide={handleClose} animation={true}>
        <Modal.Header>
          <Modal.Title>{data.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Country</th>
                <th>Phone number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{data.country.iso}</th>
                <th>{data.phone_number}</th>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalItem;
