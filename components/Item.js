import styled from "styled-components";
import Link from "next/link";

const Item = (props) => {
  return (
    <Link
      href={{
        pathname: "/country",
        query: { id: props.country.alpha3Code },
      }}
      passHref
    >
      <Wrapper>
        <Image src={props.country.flag} alt={props.country.name}></Image>
        <StyledCountryName>{props.country.name}</StyledCountryName>
        <StyledCountryInfo>
          <li>{`Population: `}</li>
          <li>{`Region: `}</li>
          <li>{`Capital: `}</li>
        </StyledCountryInfo>
      </Wrapper>
    </Link>
  );
};
export default Item;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid ${(props) => props.theme.bg};
`;

const StyledCountryName = styled.h2`
  color: ${(props) => props.theme.text};
`;
const StyledCountryInfo = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.text};
  list-style-type: none;
  font-weight: 600;
  padding-left: 1rem;
`;

const Wrapper = styled.div`
  min-width: 250px;
  background: ${(props) => props.theme.el_bg};
  box-shadow: 0 0 10px ${(props) => props.theme.shadow};
  border-radius: 8px;
  margin-bottom: 2rem;
  overflow: hidden;
  outline: none;
  cursor: pointer;
`;
