// This file is used in all pages
import "bootstrap/dist/css/bootstrap.css";

import { AppWrapper } from "context/state";

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
