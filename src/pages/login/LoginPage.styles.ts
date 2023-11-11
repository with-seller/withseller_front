/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const loginBody = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`;

const loginCard = () => css`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export { loginBody, loginCard };
