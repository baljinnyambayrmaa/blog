import "@/styles/globals.css";
import { Main } from "next/document";
import { Work_Sans, Source_Serif_4 } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],

  variable: "--font-work-sans",
});
const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${workSans.variable} ${sourceSerif4.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
