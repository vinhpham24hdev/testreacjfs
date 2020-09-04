import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalContract = ({
  title,
  children,
  show,
  handleClose,
  handleModal,
  handleShow,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header>
          <Modal.Title> {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button
            style={{ background: "#46139f"}}
            onClick={() => {
              handleModal("all-contact-modal");
              handleShow();
            }}
          >
            ALL Contacts
          </Button>
          <Button
            style={{ background: "#ff7f50"}}

            onClick={() => {
              handleModal("us-contact-modal");
              handleShow();
            }}
          >
            US Contacts
          </Button>
          <Button style={{background:'white', border: '1px solid #46139f', color: '#46139f'}} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalContract;
