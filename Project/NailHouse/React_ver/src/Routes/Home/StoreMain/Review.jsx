import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../Context/ProductionContext";

import { MicroSpan } from "../../../Component/Span";

export default ({ id }) => {
  const {
    result: { result, loading, error },
  } = useContext(ProductionContext);

  const [count, setCount] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const product_id = result.rating.map((v) => v.product_id);
    const total_count = new Array(product_id.length - 1).fill(0);
    const total_rating = new Array(product_id.length - 1).fill(0);

    result.rating.forEach((v) => {
      // review 총 개수 구하기
      total_count.splice(
        v.product_id - 1,
        1,
        total_count[v.product_id - 1] + 1
      );
      // review 총 별점 합산 구하기
      total_rating.splice(
        v.product_id - 1,
        1,
        total_rating[v.product_id - 1] + v.rating
      );
    });
    setCount(total_count);
    setRating(total_rating);
    console.log(total_count, total_rating);
    console.log(count, rating);
  }, [result]);

  const StarIcon = styled.i`
    color: #3da5f5;
  `;

  return (
    <>
      <StarIcon className="icon-Star" />
      {result && (
        <MicroSpan primary weight="700">
          {/* {total_rating[id - 1] / total_count[id - 1]} */}
        </MicroSpan>
      )}
    </>
  );
};
