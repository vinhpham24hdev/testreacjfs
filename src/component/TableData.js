import React, { useState } from "react";
import { Table } from "react-bootstrap";
import MySpinner from "./Spinner";
import { Scrollbars } from "react-custom-scrollbars";

const TableData = ({
  arrBody,
  handleShowItem,
  handleItem,
  handleLoad,
  loading,
  even,
  searchKey,
  count,
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
    <Scrollbars
      onScrollStop={() => {
        handleLoad(3);
      }}
      style={{ width: 470, height: 400 }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
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
          {loading && (
            <th style={{ textAlign: "center" }} colSpan="2">
              <MySpinner />
            </th>
          )}
        </tbody>
      </Table>
    </Scrollbars>
  );
};

export default TableData;
