import styled from "styled-components";

// Styled component
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1em;
  border: 0.1rem solid var(--mainWhite);
  color: mainWhite;
  padding: 0.9rem
  background-color: var(--deepRed);
  width: 200px;
  border: 0.1rem solid var(--deepRed);
  border-color:${props =>
    props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
  color: ${props => (props.cart ? "var(--mainWhite)" : "var(--mainWhite)")};
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem; 0.5rem;
  transition: all 0.5s ease-in-out; 
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(--mainYellow)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
  `;
