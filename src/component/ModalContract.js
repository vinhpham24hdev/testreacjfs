import React, { useState } from "react";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import { Modal, Button, Table } from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import { getAllContacts, getUsContacts } from "../redux/actions/contacts";

import ModalItem from "./ModalItem";
import MySpinner from "./Spinner";

const ModalContract = ({
  loading,
  title,
  children,
  handleClose,
  handleModal,
  handleShow,
}) => {
  const dispatch = useDispatch();

  const objectBody = get(children, "data.contacts", {});
  const arrBody = Object.entries(objectBody);
  const [checked, setChecked] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const handleShowItem = () => setShowItem(true);
  const handleCloseItem = () => setShowItem(false);
  const [itemData, setItemData] = useState();
  const handleItem = (item) => setItemData(item);

  return (
    <Router>
      <Modal show onHide={handleClose} animation={true}>
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
            {loading && <th style={{textAlign:'center'}} colspan ='2'><MySpinner /> </th>}
              {arrBody.map((item, index) => {
                return (
                  <tr key={index}>
                    <th>{index}</th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        handleShowItem();
                        handleItem(item[1]);
                      }}
                    >
                      {item[0]}
                    </th>
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
          <Link to="/buttonA">
            <Button
              style={{ background: "#46139f" }}
              onClick={() => {
                handleModal("all-contact-modal");
                handleShow();
                dispatch(getAllContacts(1));
              }}
            >
              ALL Contacts
            </Button>
          </Link>
          <Link to="/buttonB">
            <Button
              style={{ background: "#ff7f50" }}
              onClick={() => {
                handleModal("us-contact-modal");
                handleShow();
                dispatch(getUsContacts(2));
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
          </Link>
        </Modal.Footer>
      </Modal>
      {showItem ? (
        <ModalItem
          data={itemData}
          show={showItem}
          handleClose={handleCloseItem}
        />
      ) : null}
    </Router>
  );
};

export default ModalContract;
