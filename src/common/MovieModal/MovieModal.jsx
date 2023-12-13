import React from "react";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import { useMovieTrailerQuery } from "../../hooks/useMovieTrailer";
import "./MovieModal.style.css";
import Alert from "react-bootstrap/Alert";
import { Spinner } from "react-bootstrap";

const MovieModal = ({ movie, ...props }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const { data, isLoading, isFetching, isError, error } = useMovieTrailerQuery(
    movie.id
  );

  const modalContent = () => {
    if (isLoading || isFetching) {
      return (
        <div className="spinner-area">
          <Spinner
            animation="border"
            variant="danger"
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>
      );
    }
    if (isError) {
      return (
        <Alert key="danger" variant="danger">
          {error.message}
        </Alert>
      );
    }
    if (data.data.results.length === 0) {
      return (
        <Alert key="danger" variant="danger">
          There is no trailer for this movie
        </Alert>
      );
    }
    return (
      <YouTube
        videoId={data.data.results[0].key}
        opts={opts}
        className="youtube-frame"
      />
    );
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName="trailer-modal"
    >
      <Modal.Header closeButton closeVariant="white"></Modal.Header>
      <Modal.Body>{modalContent()}</Modal.Body>
    </Modal>
  );
};

export default MovieModal;
