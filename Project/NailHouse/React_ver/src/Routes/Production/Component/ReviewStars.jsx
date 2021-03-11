import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ProductionContext } from "../Context";

export default () => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, loading, error },
    setResult,
  } = useContext(ProductionContext);

  // 평균 별점에 따라 star의 색을 변환하기 위해 array state
  const [fill, setFill] = useState([false, false, false, false, false]);
  // 평균 별점이 인덱스보다 높으면 해당 값을 true로 바꿈
  const fillRating = (avg) => {
    const ratingCheck = fill;

    ratingCheck.forEach((v, i) => {
      if (avg > i) {
        ratingCheck.splice(i, 1, true);
      } else return;
    });
    setFill([...ratingCheck]);
  };
  // result가 있을 경우에 실행
  useEffect(() => {
    if (result) {
      fillRating(result.rating.rating_avg);
    }
  }, [result]);

  const ReviewStarDiv = styled.div``;

  const ReviewStar = styled.i`
    font-size: 16px;
    color: ${(props) => (props.fill ? "#3DA5F5" : "#E0E2E7")};
    &:last-child {
      margin-right: 8px;
    }
  `;

  return (
    <ReviewStarDiv>
      {result && (
        <>
          <ReviewStar className={"icon-Star"} fill={fill[0]} />
          <ReviewStar className={"icon-Star"} fill={fill[1]} />
          <ReviewStar className={"icon-Star"} fill={fill[2]} />
          <ReviewStar className={"icon-Star"} fill={fill[3]} />
          <ReviewStar className={"icon-Star"} fill={fill[4]} />
        </>
      )}
    </ReviewStarDiv>
  );
};
