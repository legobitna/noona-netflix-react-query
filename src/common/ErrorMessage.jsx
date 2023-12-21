import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ error }) => {
  return (
    <Alert key="danger" variant="danger">
      {error.message}
    </Alert>
  );
};

export default ErrorMessage;
