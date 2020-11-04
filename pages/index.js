import Head from 'next/head';
import React,{useState,useEffect} from "react"

export default function Home() {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then((response) => response.json())
      .then((json) => setPhoto(json));
  }, []);

  return (
    <div>
      <Head>
        <title>Social Media Preview</title>
        <meta property="og:url" content="https://team-place.com/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="2747726002141483" />
        <meta property="og:title" content={photo?.title} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={photo?.url} />
      </Head>
      <h2>
        {photo?.title}
      </h2>
    </div>
  );
}


