/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';
import { FC } from 'react';

import Title from '../../atoms/title';

type TProps = {
  text: string;
};

const TitleWrapper: FC<TProps> = (props: TProps) => {
  const { text }: TProps = props;
  const style: SerializedStyles = css`
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-flow: column nowrap;
    color: #fff;
    backface-visibility: hidden;
  `;

  return(
    <div css={css`${style}`}>
      <Title text={text} />
    </div>
  );
};
export default TitleWrapper;