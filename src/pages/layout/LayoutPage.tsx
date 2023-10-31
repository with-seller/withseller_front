import { ReactElement } from 'react';
import { layoutPage } from './LayoutPage.styles';
import { useTheme } from '@emotion/react';

interface LayoutPageProps {
  children: ReactElement;
}

function LayoutPage({ children }) {
  const theme = useTheme();

  return <div>{children}</div>;
}

export default LayoutPage;
