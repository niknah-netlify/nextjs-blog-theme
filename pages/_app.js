import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
	  qqq
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
