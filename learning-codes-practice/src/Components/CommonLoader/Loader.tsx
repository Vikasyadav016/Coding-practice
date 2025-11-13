// src/components/Loader.tsx
import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loader.css";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default Loader;
