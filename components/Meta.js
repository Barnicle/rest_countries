import Head from "next/head";
import { FcGlobe } from "react-icons/fc";
const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/globe.svg" />
      <link rel="stylesheet" type="text/css" href="/public/nprogress.css" />
      <title>Where in the world?</title>
    </Head>
  );
};

export default Meta;
