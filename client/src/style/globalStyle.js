import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  //흰색흰색,회색,검은색,포인트색,노랑색 너비
  --pointColor: #412DD4;
  --white: #FFFFFF;
  --gray: #888888;
  --black: #000000;
  --yellow: #FFD361;
  --gray-10: #DFDFDF; //--color--숫자 숫자의 의미를 모르겠습니다.
  
  --main-width: 1280px;

}
//리셋 스타일링
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    text-decoration: none;
    color: var(--black);
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;//?
    overflow-x: hidden; 
    -ms-user-select: none; //?
    -moz-user-select: -moz-none;//?
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    width: 100vw;
}
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
