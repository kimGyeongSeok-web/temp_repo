import AppLayout from "@components/Layout/AppLayout";
import { globalStyles } from "@styles/styles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log("app.tsx");

  return (
    <>
      {globalStyles}
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
