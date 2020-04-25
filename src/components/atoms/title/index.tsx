/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';
import { FC } from 'react';

type TProps = {
  text: string;
};

const Title: FC<TProps> = (props: TProps) => {
  const { text }: TProps = props;
  const style: SerializedStyles = css`
    font-size: 12vh;
    line-height: 1.8;
  `;
  return (
    <h1
      css={css`${style}`}
    >{text}</h1>
  );
};

export default Title;
