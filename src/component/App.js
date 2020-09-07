import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { get } from "lodash";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { getAllContacts, getUsContacts } from "../redux/actions/contacts";

import "./App.css";
import ModalContract from "./ModalContract";

function App() {
  const dispatch = useDispatch();
  const storeContacts = useSelector((store) => store.contacts);
  let loading;
  const allContacts = get(storeContacts, "allContacts");
  const usContacts = get(storeContacts, "usContacts");

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
    loading = storeContacts.allContacts.loading;
  } else if (modal == "us-contact-modal") {
    title = "US contacts";
    children = usContacts;
    loading = storeContacts.usContacts.loading;
  }

  return (
    <Router>
      <div className="container">
        <div className="modal-button">
          <Link to="/buttonA">
            <Button
              style={{ background: "#46139f" }}
              onClick={() => {
                handleModal("all-contact-modal");
                dispatch(getAllContacts(1));
                handleShow();
              }}
            >
              Button A
            </Button>
          </Link>
          <Link to="/buttonB">
            <Button
              style={{ background: "#ff7f50" }}
              onClick={() => {
                handleModal("us-contact-modal");
                dispatch(getUsContacts(2));
                handleShow();
              }}
            >
              Button B
            </Button>
          </Link>
        </div>
        <div className="modal-style">
          {show ? (
            <ModalContract
              title={title}
              children={children}
              loading = {loading}
              handleClose={handleClose}
              handleModal={handleModal}
              handleShow={handleShow}
            />
          ) : null}
        </div>

        {/* <Route path="/buttonA" exact component={buttonA} />
        <Route path="/buttonB" exact component={buttonB} /> */}
      </div>
    </Router>
  );
}

export default App;
