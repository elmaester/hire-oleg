import styled from "styled-components";
import { sizes } from "../../variables";

const Table = styled.table`
  margin: 1.3em 0;
  font-size: 15px;
  @media ${sizes.tablet} {
    font-size: 18px;
  }
  @media ${sizes.tabletLandscape} {
    font-size: 21px;
  }
  td {
    padding: 0.7em;
  }
  tr.light-gray {
    background-color: #eee;
  }
  tr.darker-gray {
    background-color: #ccc;
  }
`;

export default Table;
