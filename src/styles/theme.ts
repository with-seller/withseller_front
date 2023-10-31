import { Theme } from '@emotion/react';

const media = {
  mobile: `screen and (min-width: ${DEVICE_SIZE.mobile})`,
  tablet: `screen and (min-width: ${DEVICE_SIZE.tablet})`,
  laptop: `screen and (min-width: ${DEVICE_SIZE.laptop})`,
};

const theme: Theme = {
  media,
};

export default theme;
