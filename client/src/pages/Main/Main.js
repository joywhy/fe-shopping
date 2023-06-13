import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import data from '../../common/data/data.json';
const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 62px;
`;
const H2 = styled.h2`
  width: 100%;
  height: fit-content;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  //border: 1px solid red;
  //align-items: flex-start;
`;
const Main = () => {
  const [datas, setDates] = useState(data);

  return (
    <Container>
      <H2>상품리스트</H2>
      {datas.map((data, idx) => (
        <Card key={idx} data={data} isMarked={false} />
      ))}
    </Container>
  );
};

export default Main;
