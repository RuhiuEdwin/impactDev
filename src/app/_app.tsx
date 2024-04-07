// _app.tsx

import React from "react";
import type { AppProps } from "next/app";
import "./globals.css"; // Import your global CSS file here

// Extend the default App component
function MyApp({ Component, pageProps }: AppProps) {
  // Return the Component with its pageProps
  return <Component {...pageProps} />;
}

export default MyApp;
