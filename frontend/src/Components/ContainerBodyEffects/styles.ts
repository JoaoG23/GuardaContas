import styled from "styled-components";

export const StyleItem = styled.main`
  animation: softchange 1s ease 0s alternate forwards;
  @keyframes softchange {
    from {
      opacity: 0;
      transform: translateX(-100vw);
    }
    to {
      opacity: 1;
      transform: translateX(0vw);
    }
  }
`;
