// document component - 서버에서 한 번만 실행
// nextJS 앱의 HTML 뼈대를 짜 주는 역할
// 따라서 앱이 가지고 있는 모든 페이지의 Head에 넣고 싶은 게 있다면
// 여기에 넣으면 됨.

// nextJS 폰트 사용 시 구글폰트 사용할 것.
// 빌드 시 구글 폰트를 기준으로 최적화하기 때문에.

import Document, { Head, Html, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render(): JSX.Element {
    console.log("DOCUMENT IS RUNNING");
    return (
      <Html lang="ko">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
