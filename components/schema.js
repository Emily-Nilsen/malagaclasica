import Head from 'next/head';
import Script from 'next/script';

const Schema = ({
  title,
  keywords,
  description,
  children,
  about,
  doorTime,
  location,
  composer_1,
  composer_2,
  composer_3,
  composer_4,
  composer_5,
  composer_6,
  funder,
  organizer,
  performer,
  startDate,
  subEvent,
  image,
  name,
  url,
}) => {
  return (
    <div>
      <Head>
        <script type="application/ld+json">{`
    {
      "@context":"https://schema.org/",
      "@type":"Festival",
      "name":"${title}",
      "keywords":"${keywords}",
      "description":"${description}",
      "about":"${about}",
      "doorTime":"${doorTime}",
      "location":"${location}",
      "composer":["${composer_1}", "${composer_2}"]
      "url": "${url}"
    }
    `}</script>
      </Head>
      {children}
    </div>
  );
};

export default Schema;
