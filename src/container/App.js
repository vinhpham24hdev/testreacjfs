import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { get } from "lodash";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { getAllContacts, getUsContacts } from "../redux/actions/contacts";

import "./App.css";
import ModalContract from "../component/ModalContract";

function App() {
  const dispatch = useDispatch();
  const storeContacts = useSelector((store) => store.contacts);
  let loading;
  const allContacts = storeContacts.allContacts;
  const usContacts = storeContacts.usContacts;

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
  let count = 0;

  return (
    <Router>
      <div className="container">
        <div className="modal-button">
          <Link to="/buttonA">
            <Button
              style={{ background: "#46139f" }}
              onClick={() => {
                handleModal("all-contact-modal");
                dispatch(getAllContacts(count));
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
                dispatch(getUsContacts(count));
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
              count ={count}
              title={title}
              children={children}
              loading={loading}
              handleClose={handleClose}
              handleModal={handleModal}
              handleShow={handleShow}
            />
          ) : null}
        </div>

        {/* <Route path="/buttonA" exact component={ModalContract} />
        <Route path="/buttonB" exact component={ModalContract} /> */}
      </div>
    </Router>
  );
}

export default App;
