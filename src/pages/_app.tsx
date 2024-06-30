import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const init_poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--var-inter--",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={init_poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
