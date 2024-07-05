import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document<{ isDark: boolean }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
    // let isDark = false;
    // try {
    //   if (/is\_night\=1/.test(ctx.req?.headers.cookie ?? "")) {
    //     isDark = true;
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
    // // 这里可以添加自定义逻辑
    // return { ...initialProps, isDark };
  }

  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    return (
      <Html>
        <Head />
        <body
          className={pageProps?.isDark ? "classic-dark" : ""}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
