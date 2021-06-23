import { useState } from "react";
import {faChevronRight, faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemCarousel = (props) => {
  const { pages } = props;
  const [page, setPage] = useState(1);

  const incrementPage = () =>
    setPage((prevPage) => {
      if (prevPage < pages) {
        return prevPage + 1;
      }
      return prevPage;
    });

  const decrementPage = () => {
    setPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      }
      return prevPage;
    });
  };

  const carouselPosition = () =>
    `translateX(-${(page - 1) * window.innerWidth}px)`;

  const containerStyle = {
    display: "flex",
    position: "relative",
    minHeight: 300,
    width: "100%",
    justifyContent: "space-between",
  };

  const carouselStyle = (position) => {
    return {
      display: "flex",
      position: "absolute",
      transform: position,
      zIndex: 1,
      transition: "transform 500ms ease-in-out",
    };
  };

  const btnStyle = {
    alignSelf: "center",
    padding: "20px 10px",
    margin: "0 20px 0 20px",
    borderRadius: '4px',
    zIndex: '2'
  };

  return (
    <div style={containerStyle}>
      <button style={btnStyle} onClick={decrementPage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <ul style={carouselStyle(carouselPosition())}>{props.children}</ul>
      <button style={btnStyle} onClick={incrementPage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ItemCarousel;
