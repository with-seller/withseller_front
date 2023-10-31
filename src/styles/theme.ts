import { Theme } from '@emotion/react';
import { DEVICE_SIZE } from '../constants';

const media = {
  mobile: `@media screen and (min-width: ${DEVICE_SIZE.mobile}px)`,
  tablet: `@media screen and (max-width: ${DEVICE_SIZE.tablet}px)`,
  laptop: `@media screen and (max-width: ${DEVICE_SIZE.laptop}px)`,
};

const theme: Theme = {
  media,
};

export default theme;
