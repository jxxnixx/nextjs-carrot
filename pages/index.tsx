// import type { NextPage } from "next";
// import FloatingButton from "../components/floating-button";
// import Item from "../components/item";
// import Layout from "../components/layout";
// import Image from "next/image";
// import riceCake from "../public/local.jpeg";
// import Head from "next/head";
// import useSWR, { SWRConfig } from "swr";

// // import { Product } from "prisma/prisma-client";

// // export interface ProductWithCount extends Product {
// //   _count: {
// //     favs: number;
// //   };
// // }

// interface ProductsResponse {
//   ok: boolean;
//   // products: ProductWithCount[];
// }

// const Home: NextPage = () => {
//   const { data } = useSWR<ProductsResponse>("/api/products");
//   return (
//     <Layout title="홈" hasTabBar>
//       <Head>
//         <title>Home</title>
//       </Head>
//       <div className="flex flex-col space-y-5 divide-y">
//         {data
//           ? data?.products?.map((product) => (
//               <Item
//                 id={product.id}
//                 key={product.id}
//                 title={product.name}
//                 price={product.price}
//                 hearts={product._count?.favs || 0}
//                 image={product.image}
//               />
//             ))
//           : "Loading..."}

//         {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
//           <Item
//             id={i}
//             key={i}
//             title="iPhone 14"
//             price={99}
//             comments={1}
//             hearts={1}
//           /> */}
//         {/* ))} */}
//         <FloatingButton href="/items/upload">
//           <svg
//             className="h-6 w-6"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             />
//           </svg>
//         </FloatingButton>
//       </div>
//       <Image src={riceCake} placeholder="blur" quality={50} />
//     </Layout>
//   );
// };

// const Page: NextPage<{ products: ProductWithCount[] }> = ({ products }) => {
//   // useSWR을 사용하면,
//   // 페이지를 나갔다가 다시 돌아올 경우, 데이터를 다시 불러오지 않음.
//   // useSWR은 캐시를 사용하기 때문
//   // 처음 useSWR이 실행됐을 땐 캐시가 비어 있고
//   // 실행되고 나서는, 다른 페이지로 갔다가 다시 원래 페이지로 돌아오면
//   // 캐시 안에 이미 데이터가 있으니까 로딩 상태가 보이지 않음.
//   // 하지만 useSWR에 캐시 데이터를 미리 제공할 수 있으면?
//   // 즉 useSWR이 클라이언트단에서 api 경로에 요청을 보내기도 전에
//   // 캐시 데이터를 미리 제공한다면?
//   // 캐시가 비어 있는 상태가 아니라 이미 데이터가 있는 상태로 시작한다면?

//   return (
//     <SWRConfig
//       value={{
//         fallback: {
//           // fallback으로 캐시 초기값 설정 가능
//           // fallback 키가 중요한 이유는, 그 키가 URL이면서
//           // SWR이 캐시를 불러올 때 사용하는 키이기도 하기 때문
//           "/api/products": {
//             ok: true,
//             products,
//           },
//         },
//       }}
//       // 상품 데이터를 gssp에서 불러온 다음,
//       // SWR한테 /api/products/ 캐시에 기본값이 있다고 알려주는 것.
//       // 조심! /api/products/에서 제공하는 데이터 구조가 어떻게 생겼는지!
//       // obj 구조는 ok:true, products임.
//     >
//       <Home />
//     </SWRConfig>
//   );
// };

// export async function getServerSideProps() {
//   // planetScale, prisma, getServerSideProps
//   // 이러면 데이터를 불러올 때 api 핸들러를 따로 만들지 않고
//   // 데이터를 백엔드로 POST 할 때만 api 핸들러를 만들면 됨.

//   // 근데 gssp를 사용할 경우, static optimization이나 cache 사용 불가

//   const products = await client.product.findMany({});
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// }

// // 이렇게 SSR + SWR 하게 되면, 각 장점들을 몽-땅 섞어서 사용 가능
// // 원래 SSR만/ SWR만 쓰면 단점들도 있거등
// // 룰루 ~

// export default Page;

import type { NextPage } from "next";
import FloatingButton from "../components/floating-button";
import Item from "../components/item";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
