import styled from "styled-components";

const media = pix => `@media (min-width: ${pix}px)`;

const MyPhotoContainer = styled.div`
  float: left;
  margin-right: 0.5rem;
  @media (max-width: ${props => (props.ru ? "319" : "319")}px) {
    height: ${props => (props.ru ? "85" : "85")}px;
  }
  ${media(320)} {
    height: ${props => (props.ru ? "115" : "115")}px;
  }
  ${media(480)} {
    height: ${props => (props.ru ? "208" : "208")}px;
  }
  ${media(540)} {
    height: ${props => (props.ru ? "235" : "235")}px;
  }
  ${media(600)} {
    height: ${props => (props.ru ? "246" : "246")}px;
  }
  ${media(800)} {
    height: ${props => (props.ru ? "284" : "284")}px;
  }
  ${media(1024)} {
    height: ${props => (props.ru ? "390" : "390")}px;
  }
  ${media(1125)} {
    height: ${props => (props.ru ? "367" : "375")}px;
  }
  ${media(1200)} {
    height: ${props => (props.ru ? "393" : "393")}px;
  }
  ${media(1366)} {
    height: ${props => (props.ru ? "395" : "400")}px;
  }
  ${media(1440)} {
    height: ${props => (props.ru ? "405" : "423")}px;
  }
  ${media(1536)} {
    height: ${props => (props.ru ? "423" : "360")}px;
  }
  ${media(1600)} {
    height: ${props => (props.ru ? "345" : "430")}px;
  }
  ${media(1680)} {
    height: ${props => (props.ru ? "315" : "435")}px;
  }
  ${media(1800)} {
    height: ${props => (props.ru ? "345" : "345")}px;
  }
  ${media(1920)} {
    height: ${props => (props.ru ? "420" : "355")}px;
  }
  ${media(2048)} {
    height: ${props => (props.ru ? "390" : "445")}px;
  }
  ${media(2160)} {
    height: ${props => (props.ru ? "365" : "447")}px;
  }
  ${media(2304)} {
    height: ${props => (props.ru ? "335" : "460")}px;
  }
  ${media(2560)} {
    height: ${props => (props.ru ? "500" : "405")}px;
  }
  img {
    height: 100%;
  }
`;

export default MyPhotoContainer;
