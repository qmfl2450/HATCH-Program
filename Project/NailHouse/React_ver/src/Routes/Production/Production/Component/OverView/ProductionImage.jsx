import React, { useContext, useState } from "react";
import styled from "styled-components";

import { ProductionContext } from "../../../../../Context/ProductionContext";

export default () => {
  // production 정보가 담긴 state 호출
  const {
    result: { result, error, loading },
  } = useContext(ProductionContext);

  const [img, setImg] = useState([]);
  const addImg = (img) => {
    const newArray = [];
    newArray.push(img);
    setImg([...newArray]);
  };

  // 상품 이미지 (좌측)
  const ProductionImageDiv = styled.div`
    display: flex;
  `;

  const ProductionImages = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  `;

  const ProductionImage = styled.img`
    margin-bottom: 8px;
    border-radius: 4px;
    width: 75px;
    &:last-child {
      margin-bottom: 0;
    }
    cursor: pointer;
  `;

  const ProductionImageMain = styled.img`
    border-radius: 4px;
    width: 500px;
    height: 500px;
  `;

  return loading ? (
    <></>
  ) : (
    <ProductionImageDiv>
      <ProductionImages>
        {result &&
          result.production.image_url.map((v, i) => {
            if (i < 6) {
              return (
                <ProductionImage
                  src={v}
                  onMouseOver={(v) => {
                    addImg(v.target.src);
                  }}
                />
              );
            }
          })}
      </ProductionImages>
      {result && (
        <ProductionImageMain
          src={img.length === 0 ? result.production.image_url[0] : img[0]}
        />
      )}
    </ProductionImageDiv>
  );
};
