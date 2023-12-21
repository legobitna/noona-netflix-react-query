import React from 'react'
import {  Spinner } from "react-bootstrap";
import "./LoadingSpinner.style.css"

const LoadingSpinner = () => {
  return (
    <div className="spinner-area">
    <Spinner
      animation="border"
      variant="danger"
      style={{ width: "5rem", height: "5rem" }}
    />
  </div>
  )
}

export default LoadingSpinner