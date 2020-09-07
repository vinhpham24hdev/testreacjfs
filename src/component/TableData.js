import React, { useState } from "react";
import { Table } from "react-bootstrap";
import MySpinner from "./Spinner";

const TableData = ({ arrBody, handleShowItem, handleItem, loading }) => {
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
          <th style={{ textAlign: "center" }} colspan="2">
            <MySpinner />{" "}
          </th>
        )}
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
  );
};

export default TableData;
