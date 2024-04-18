import jsonLd from 'jsonLd';
import { type AppType } from "next/dist/shared/lib/utils";
import Script from 'next/script';

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <Component {...pageProps} />;
    <Script id='jsonld' dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
  </>
};

export default MyApp;
