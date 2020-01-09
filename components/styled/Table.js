import styled from "styled-components";

const Table = styled.table`
  margin: 0 auto;
  td {
    padding: 1rem;
    line-height: 0.3rem;
  }
  tr.light-gray {
    background-color: #eee;
  }
  tr.darker-gray {
    background-color: #ccc;
  }
`;

export default Table;
