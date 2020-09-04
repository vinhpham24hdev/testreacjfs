import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {get} from "lodash";
import { getAllContacts, getUsContacts } from "../redux/actions/contacts";

import "./App.css";
import ModalContract from "./ModalContract";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllContacts(1));
    dispatch(getUsContacts(2));
  }, []);
  
  const storeContacts = useSelector(store => store.contacts);

  const allContacts = get(storeContacts,"allContacts");
  const usContacts = get(storeContacts,"usContacts");

  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const handleModal = (modal) => setModal(modal);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  let title = null;
  let children = null;

  if (modal == "all-contact-modal") {
    title = "All contacts";
    children = allContacts;
  } else if (modal == "us-contact-modal") {
    title = "US contacts";
    children = usContacts;
  }

  return (
    <div className="container">
      <div className="modal-button">
        <Button
          style={{ background: "#46139f" }}
          onClick={() => {
            handleModal("all-contact-modal");
            handleShow();
          }}
        >
          Button A
        </Button>
        <Button
          c
          style={{ background: "#ff7f50" }}
          onClick={() => {
            handleModal("us-contact-modal");
            handleShow();
          }}
        >
          Button B
        </Button>
      </div>
      <div className="modal-style">
        {show ? (
          <ModalContract
            title={title}
            children={children}
            show={show}
            handleClose={handleClose}
            handleModal={handleModal}
            handleShow={handleShow}
          />
        ) : null}
      </div>
    </div>
  );
}


export default App;
