import React, { useState, useEffect, useRef } from "react";

export default function Review({ reviews }) {
  const [height, setHeight] = useState("initial");

  const cardElement = useRef();

  function setMaxHeight() {
    const cardHeight = cardElement.current.getBoundingClientRect().height;
    console.log("cardheight", cardHeight);
    console.log("cardElement", cardElement);
    setHeight(Math.max(cardHeight, 100));
  }

  useEffect(setMaxHeight, [reviews]);

  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <>
      <div className="section-head">
        <h2>Reviews</h2>
      </div>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <div className="cards" key={index} ref={cardElement}>
            {review}
          </div>
        ))}
      </div>
    </>
  );
}
