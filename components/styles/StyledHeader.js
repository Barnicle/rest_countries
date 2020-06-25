import styled from "styled-components";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  width: 100%;
  min-width: 320px;
  background: ${(props) => props.theme.el_bg};
  border-bottom: 2px solid ${(props) => props.theme.bg};
  padding: 1rem;
`;
export default StyledHeader;
