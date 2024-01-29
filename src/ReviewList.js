import React from "react";
import Review from "./Review";

export default function ReviewList({ reviewList }) { //direct get the reviewList-property from the props
  //   console.log(props.reviewList)

  //   const {reviewList } = props
  return (
    <div>{<Review reviews={reviewList}></Review>}</div>
  );
}
