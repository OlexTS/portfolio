import styled from '@emotion/styled';

export const FooterBox = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 10px 30px;
  color: var(--cl-secondary-color);
  border-top: 1px solid var(--cl-border-color);
  
  background-image: linear-gradient(
    to right,
    var(--cl-start-color),
    var(--cl-end-color)
  );
  opacity: 0.7;

  @media (min-width: 768px) {
    padding: 0 50px;
    min-height: 80px;
  }
`;

export const Text = styled.span`
display: inline-block;
margin-left: 5px;
  font-weight: 500;
  transition: var(--animat);
  &:hover,
  &:focus {
    color: var(--cl-accent-color);
  }
  
  @keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
  animation: pulse 3s ease-in-out infinite;
`;
