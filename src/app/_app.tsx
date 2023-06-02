import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
