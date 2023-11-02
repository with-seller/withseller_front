import { ReactElement } from 'react';
import { layoutPage } from './LayoutPage.styles';
import { useTheme } from '@emotion/react';

interface LayoutPageProps {
  children: ReactElement;
}

function LayoutPage({ children } : LayoutPageProps) {
  const theme = useTheme();

  return <div css={layoutPage()}>{children}</div>;
}

export default LayoutPage;
