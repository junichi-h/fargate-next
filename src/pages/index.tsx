/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Link from 'next/link'
import {
  FC
} from 'react';

import TitleWrapper from '../components/molecules/title-wrapper';

type TProps = {};

const TopPage: FC<TProps> = () => {
  return (
    <div>
      <TitleWrapper text="TOP" />
      <div
        css={css`
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate3d(-60%, -50%, 0);
        `}
      >
        <Link href='/example'>
          <a>Example</a>
        </Link>
      </div>
    </div>
  );
};

export default TopPage;
