import {
  Html, Head, Main, NextScript,
} from 'next/document';
import styled from 'styled-components';

const Document: React.FC = () => (
  <Html>
    <Head />
    <Body>
      <Main />
      <NextScript />
    </Body>
  </Html>
);

const Body = styled.body`
`;

export default Document;
