/** @jsx jsx */
import { css, jsx } from '@emotion/core';
// import withRedux from 'next-redux-wrapper';
import { FC, Fragment, ReactElement } from 'react';
import { Store } from 'redux';
import 'ress/dist/ress.min.css';


type TProps = {
  Component: any;
  pageProps: any;
  store: Store;
};

const MyApp: FC<TProps> = (props: TProps): ReactElement<TProps> => {
  const { Component, pageProps }: TProps = props;

  // console.log(`isShowAppLoading: ${isShowAppLoading}`);

  return (
    <Fragment>

      <div
        css={css`
          position: relative;
          box-sizing: border-box;
        `}
      >
        <div
          css={css`
              position: relative;
              box-sizing: border-box;
            `}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </Fragment>
  );
};

// withReduxを使ってReduxに接続
// export default withRedux(initializeStore)(MyApp);
export default MyApp;
