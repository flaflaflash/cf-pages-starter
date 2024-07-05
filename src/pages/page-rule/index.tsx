import type { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";

export default function Content() {
  return <div className="container">this is page rule page</div>;
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  res,
  query,
}) => {
  const isDark = getCookie("is_night", { req, res });

  return {
    props: {
      isDark,
    },
  };
};
