import React from 'react';
import {
  Container,
  ModalBox,
  Star,
  TextBox,
  Title,
  SmallTitle,
  DescBox,
  Desc,
} from './Card.styled';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import { CardType } from '../../common/type';

const Card = (props) => {
  console.log(props.data.type);

  const imgUrl = props.data.image_url || props.data.brand_image_url;
  const title = `${props.data.type === CardType.CATEGORY ? '#' : ''}${
    props.data.title || props.data.brand_name
  }`;
  const smallTitle = `${
    props.data.type === CardType.PRODUCT
      ? props.data.discountPercentage + `%`
      : props.data.type === CardType.BRAND
      ? '관심고객수'
      : ''
  }`;
  //Number(props.data.price).toLocaleString() 자릿수 쉼표
  const desctext = `${
    props.data.type === CardType.PRODUCT
      ? Number(props.data.price).toLocaleString() + `원`
      : props.data.type === CardType.EXHIBITION
      ? props.data.sub_title
      : props.data.type === CardType.BRAND
      ? props.data.follower
      : ''
  }`;

  const isExhibition = props.data.type === CardType.EXHIBITION;
  return (
    <Container>
      {/* 사진 */}
      <ModalBox imgUrl={imgUrl}>
        <BookmarkIcon isMarked={true} />
      </ModalBox>

      {/* 하단 텍스트 */}
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

      {desctext ? (
        <DescBox>
          <Desc position={isExhibition ? 'left' : 'right'}>{desctext}</Desc>
        </DescBox>
      ) : null}
    </Container>
  );
};

export default Card;
