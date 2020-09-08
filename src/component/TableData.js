import React, {useState} from "react";
import { Table } from "react-bootstrap";
import MySpinner from "./Spinner";

const TableData = ({ arrBody, handleShowItem, handleItem, loading, even }) => {
  let arrData = [];
  if (even) {
    arrData = arrBody.filter(item =>{return item[0]%2 == 0})
  } else {
    arrData = arrBody
  }


  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <th style={{ textAlign: "center" }} colSpan="2">
              <MySpinner />
            </th>
          )}

          {arrData.map((item, index) => {
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
  );
};

export default TableData;
