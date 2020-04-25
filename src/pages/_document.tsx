import { Global } from '@emotion/core';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import React, { ReactElement } from 'react';
import { globalStyle } from '../styles/global-style';

import {
  META_TITLE,
  META_DESCRIPTION
} from '../constants/meta';

type TProps = {};

export default class CustomDocument extends NextDocument<TProps> {
  /**
   * ページロード時にデータを取得する場合などに使う
   * @param context
   */

  public static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(context);

    return { ...initialProps };
  }

  public render(): ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content={META_DESCRIPTION} />
          <meta property="og:title" content={META_TITLE} />
          <meta property="og:description" content={META_DESCRIPTION} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={META_TITLE} />
          <meta name="twitter:description" content={META_DESCRIPTION} />

          <meta name="format-detection" content="telephone=no" />

        </Head>
        <body>
          <Main />
          <NextScript />
          <Global styles={globalStyle} />
        </body>
      </Html>
    );
  }
}
