import React, { useState } from "react";
import { Table } from "react-bootstrap";
import MySpinner from "./Spinner";

const TableData = ({
  arrBody,
  handleShowItem,
  handleItem,
  loading,
  even,
  searchKey,
}) => {
  let arrData = arrBody;
  if (even) {
    arrData = arrBody.filter((item) => {
      return item[0] % 2 == 0;
    });
  }
  if (searchKey) {
    arrData = arrBody.filter((item) => {
      return item[0] == searchKey;
    });
  }
  if (even && searchKey) {
    arrData = arrBody.filter((item) => {
      return item[0] % 2 == 0 && item[0] == searchKey;
    });
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
