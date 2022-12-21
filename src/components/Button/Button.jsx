import { StyledBtn } from './Button.styled';

function Button({ onClick }) {
  return <StyledBtn onClick={onClick}>Load more</StyledBtn>;
}

export default Button;
