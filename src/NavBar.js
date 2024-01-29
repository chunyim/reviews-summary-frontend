import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewList from "./ReviewList";
import Summary from "./Summary";
import useError from "./useError"; 

export default function NavBar() {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState(
    "Paste a google map link of a restaurant above to get a review summary!"
  );
  const { error, setError, clearError } = useError();

  const [reviews, setReviews] = useState([
    "review_1",
    "review_2",
    "review_3",
    "review_4",
    "review_5",
    "review_6",
    "review_7",
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/summarize", {
        url,
      });
      setReviews(response.data.reviews);
      setSummary(response.data.result);
      clearError();
    } catch (error) {
      console.error("Error fetching data:", error);
      setSummary("");
      setError("Error fetching data. Please check your URL and try again.");
    }
  };

  return (
    <>
      <div className="header">
        <form onSubmit={handleSubmit}>
          <label>
            Enter URL
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <div className="container">
        <Summary reviewSummary={summary} error={error}></Summary>
        <ReviewList reviewList={reviews}></ReviewList>
      </div>
    </>
  );
}
