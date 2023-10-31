import { css, Theme } from '@emotion/react';

const layoutPage = ({ mq }: Theme) => css`
  overflow-y: auto;
  position: relative;

  height: calc(100vh - 16rem);
  margin-top: 16rem;  
`;

export { layoutPage };
