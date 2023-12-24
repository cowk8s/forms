import Head from "next/head";

interface Props {
  title: string;
  description: string;
}

export default function MetaInformation({
  title,
  description
}: Props) {
  const pageTitle = `${title}`;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image:type" content="image/png" />
    </Head>
  );
}