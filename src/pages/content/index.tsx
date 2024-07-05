import { GetServerSideProps } from "next";
import { getCookie } from "cookies-next";

export const config = {
	runtime: 'experimental-edge',
};
export default function Content() {
  return <div>this is content page</div>;
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