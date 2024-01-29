import React from "react";

export default function Summary({ reviewSummary, error }) {

  return (
    <>
      <div className="section-head">
        <h2>Review Summary</h2>
      </div>

      <div className="cards">
        {/* {reviewSummary && <p>{reviewSummary}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>} */}
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p>{reviewSummary}</p>
        )}
      </div>
    </>
  );
}
