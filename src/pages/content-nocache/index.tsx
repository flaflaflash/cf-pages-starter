import { GetServerSideProps } from "next";

export const config = {
	runtime: 'experimental-edge',
};
export default function Content() {
  return <div className="container">this is content page 2</div>;
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  res,
  query,
}) => {
  const isDark = !!req.cookies.is_night
  return {
    props: {
      isDark,
    },
  };
};