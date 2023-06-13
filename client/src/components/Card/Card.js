import React from 'react';
import {
  Container,
  ModalBox,
  Star,
  TextBox,
  Title,
  SmallTitle,
} from './Card.styled';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import { CardType } from '../../common/type';

const Card = (props) => {
  const title = `${props.data.type === CardType.CATEGORY ? '#' : ''}${
    props.data.title || props.data.brand_name
  }`;
  const imgUrl = props.data.image_url || props.data.brand_image_url;
  const smallTitle = `${
    props.data.type === CardType.PRODUCT
      ? props.data.discountPercentage + `%`
      : props.data.type === CardType.BRAND
      ? '관심고객수'
      : ''
  }`;
  return (
    <Container>
      {/* 사진 */}
      <ModalBox imgUrl={imgUrl}>
        <BookmarkIcon isMarked={true} />
      </ModalBox>
      <TextBox>
        <Title>{title}</Title>
        {/* '' falsy한 값 */}
        {smallTitle ? (
          // card 의 type이 product 이면isproduct는 true 아니면 false
          <SmallTitle isproduct={props.data.type === CardType.PRODUCT}>
            {smallTitle}
          </SmallTitle>
        ) : null}
      </TextBox>
      {/* <DescBox></DescBox> */}
    </Container>
  );
};

export default Card;
