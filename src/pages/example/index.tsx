/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link'
import {
  FC
} from 'react';

import TitleWrapper from '../../components/molecules/title-wrapper';

type TProps = {};

const ExamplePage: FC<TProps> = () => {
  return (
    <div>
      <TitleWrapper text="Example" />
      <div
        css={css`
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate3d(-60%, -50%, 0);
        `}
      >
        <Link href='/'>
          <a>top</a>
        </Link>
      </div>
    </div>
  );
};

export default ExamplePage;
