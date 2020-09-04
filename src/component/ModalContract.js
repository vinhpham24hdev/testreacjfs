import React, { useState } from "react";
import { get } from "lodash";
import { Modal, Button, Table } from "react-bootstrap";

import ModalItem from './ModalItem';

const ModalContract = ({
  title,
  children,
  show,
  handleClose,
  handleModal,
  handleShow,
}) => {
  const objectBody = get(children, "data.contacts", {});
  const arrBody = Object.entries(objectBody);
  const [checked, setChecked] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const handleShowItem = () => setShowItem(true);
  const handleCloseItem = () => setShowItem(false);
  const [itemData, setItemData] = useState();
  const handleItem = (item) => setItemData(item);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header>
          <Modal.Title> {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {arrBody.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{index}</th>
                    <th style={{cursor:'pointer'}} onClick={() => {handleShowItem();handleItem(item[1])}}>{item[0]}</th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          Only Even:
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <Button
            style={{ background: "#46139f" }}
            onClick={() => {
              handleModal("all-contact-modal");
              handleShow();
            }}
          >
            ALL Contacts
          </Button>
          <Button
            style={{ background: "#ff7f50" }}
            onClick={() => {
              handleModal("us-contact-modal");
              handleShow();
            }}
          >
            US Contacts
          </Button>
          <Button
            style={{
              background: "white",
              border: "1px solid #46139f",
              color: "#46139f",
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {showItem ? <ModalItem data = {itemData} show ={showItem} handleClose = {handleCloseItem} /> : null}
    </>
  );
};

export default ModalContract;
