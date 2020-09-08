import React, { useState } from "react";
import { get } from "lodash";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";

import {
  getAllContacts,
  getUsContacts,
  getMoreAllContacts,
  getMoreUsContacts,
} from "../redux/actions/contacts";

import ModalItem from "./ModalItem";
import TableData from "./TableData";
import SearchBox from "./SearchBox";

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
  let arrBody = Object.entries(objectBody);
  const [checked, setChecked] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const handleShowItem = () => setShowItem(true);
  const handleCloseItem = () => setShowItem(false);
  const [itemData, setItemData] = useState();
  const handleItem = (item) => setItemData(item);
  const handleSearch = (e) => {
    
  };
 
  return (
    <Router>
      <Modal show onHide={handleClose} animation={true}>
        <Modal.Header>
          <Modal.Title> {title}</Modal.Title>
        </Modal.Header>
        <SearchBox handleSearch={handleSearch}/>
        <Modal.Body>
          <TableData
            arrBody={arrBody}
            handleShowItem={handleShowItem}
            handleItem={handleItem}
            loading={loading}
            even ={checked}
          />
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
          </Link>
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
      {showItem ? (
        <ModalItem data={itemData} handleClose={handleCloseItem} />
      ) : null}
    </Router>
  );
};

export default ModalContract;
