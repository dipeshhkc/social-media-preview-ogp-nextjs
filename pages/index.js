import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Social Media Preview
        </title>
        <meta property="og:url" content="https://team-place.com/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2747726002141483" />
        <meta
          property="og:title"
          content="Social Media Preview Working?"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={"/image.png"} />
      </Head>
      <h2>
        Hurray!!! The Website is Complete. Lets Try Social Media Preview Now
      </h2>
    </div>
  );
}
