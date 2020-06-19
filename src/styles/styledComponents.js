import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin-right: ${(props) => props.margin || "0"};
  margin-bottom: ${(props) => props.margin || "0"};
  width: ${(props) => props.width || "7rem"};
  background: ${(props) => props.theme.el_bg};
  color: ${(props) => props.theme.text};
  border: 1px solid transparent;
  border-radius: 4px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;