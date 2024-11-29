import Head from "next/head";

const PageHead = ({ title, icons }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Page Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
    </>
  );
};

export default PageHead;
