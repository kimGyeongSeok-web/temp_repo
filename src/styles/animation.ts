import { css, keyframes } from "@emotion/react";

/* Animation */
const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(calc(-50% + 50px));
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const fadeUp = css`
  animation-duration: 0.65s;
  animation-name: ${fadeUpKeyframes};
  animation-timing-function: ease;
`;