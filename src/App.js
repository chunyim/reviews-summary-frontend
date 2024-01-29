import React from "react";
import NavBar from "./NavBar";
import "./App.css"

const App = () => {
  // const [url, setUrl] = useState("");
  // const [result, setResult] = useState("");
  // const [error, setError] = useState("");
  // const [reviews, setReviews] = useState([]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:5000/api/summarize", {
  //       url,
  //     });
  //     setReviews(response.data.reviews);
  //     setResult(response.data.result);
  //     setError("");
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setResult("");
  //     setError("Error fetching data. Please check your URL and try again.");
  //   }
  // };


  return (
    <>
      <NavBar></NavBar>
    </>
  );
};

export default App;
