import type { GetServerSideProps } from "next";

export const config = {
  runtime: "experimental-edge",
};

export default function RulePage() {
  return <div className="container">this is page rule page 1</div>;
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  res,
  query,
}) => {
  const isDark = !!req.cookies.is_night;
  return {
    props: {
      isDark,
    },
  };
};
