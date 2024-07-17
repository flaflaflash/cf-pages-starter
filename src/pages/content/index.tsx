import { GetServerSideProps } from "next";

export const config = {
  runtime: "experimental-edge",
};
export default function Content(props: { isDark: boolean; platform: string }) {
  const { isDark, platform } = props;
  return (
    <div className={isDark ? "classic-dark" : ""}>
      <div className="container">this is content page 2</div>
      <div>{platform}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  res,
  query,
}) => {
  const isDark = !!req.cookies.is_night;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=120"
  );
  const ua = req.headers["user-agent"];
  console.log("ua:", ua);
  const isIPhone = ua && ua?.indexOf("iPhone") >= 0;
  const isAndroid = ua && ua?.indexOf("Android") >= 0;
  return {
    props: {
      isDark,
      platform: isIPhone ? "iPhone" : isAndroid ? "Android" : "not mobile",
    },
  };
};
