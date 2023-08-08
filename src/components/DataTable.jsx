import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { loanRequests } from "../data";
import { Row, Col } from "react-bootstrap";

const DataTable = () => {
  const [requestData, setRequestData] = useState(loanRequests);
  const headings = Object.keys(loanRequests[0]);
  //console.log(headings);
  const deleteItem = (id) => {
    let otherRequests = requestData.filter((r) => r.id !== id);
    setRequestData(otherRequests);
  };

  return (
    <div className="table-responsive pt-3">
      <table className="table table-striped project-orders-table">
        <thead>
          <tr>
            {headings.map((h, index) => {
              return (
                <td
                  key={index}
                  style={{ fontWeight: "bolder", textTransform: "uppercase" }}
                >
                  {h}
                </td>
              );
            })}
            <td style={{ fontWeight: "bolder", textTransform: "uppercase" }}>
              action
            </td>
          </tr>
        </thead>
        <tbody>
          {requestData.map((request, index) => {
            return (
              <tr key={index}>
                {headings.map((keys) => {
                  return <td key={keys}>{request[keys]}</td>;
                })}
                <td>
                  <Row>
                    <div className="d-flex align-items-center">
                      <Col>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm btn-icon-text mr-5"
                          onClick={() => processItem(request.id)}
                        >
                          Process
                          <i className="bi bi-pencil-fill btn-icon-append"></i>
                        </button>
                      </Col>
                      <Col>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm btn-icon-text"
                          onClick={() => deleteItem(request.id)}
                        >
                          Delete
                          <i className="bi bi-trash-fill btn-icon-append"></i>
                        </button>
                      </Col>
                    </div>
                  </Row>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
