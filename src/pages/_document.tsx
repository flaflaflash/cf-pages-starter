import { Html, Head, Main, NextScript } from "next/document";
import "@/public/style.css"

export default function Document(props: {
  __NEXT_DATA__: { props: { pageProps: any } };
}) {
  const pageProps = props?.__NEXT_DATA__?.props?.pageProps;
  return (
    <Html lang="en">
      <Head />
      <body className={pageProps?.isDark ? "classic-dark" : ""}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
