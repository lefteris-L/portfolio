import jsonLd from 'jsonLd';
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <Component {...pageProps} />
    <script key='jsonld' dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
  </>
}

export default MyApp;
