import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("APP IS RUNNING");
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
      {/* <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="lazyOnload"
        // beforeInteractive : 유저-페이지 상호작용 전에 꼭 스크립트를 불러와야 할 때
        // afterInteractive : 페이지를 다 불러온 뒤, 나중에 불러와도 될 때
        // lazyOnload : 다른 데이터나 소스를 불러오고 나서 불러오는 것.
      />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        onLoad={() => {
          // onLoad : 이것 앞의 스크립트를 다 불러오고 나서야 실행되는 함수
          // 스크립트를 언제 불러올지 결정, 그 스크립트를 불러왔다는 것을 확인
          // 개쩔
          window.fbAsyncInit = function () {
            FB.init({
              appId: "your-app-id",
              autoLogAppEvents: true,
              xfbml: true,
              version: "v13.0",
            });
          };
        }}
      /> */}
    </SWRConfig>
  );
}
//     <div className="w-full max-w-xl mx-auto">
//       <Component {...pageProps} />
//     </div>
//   );
// }

export default MyApp;
