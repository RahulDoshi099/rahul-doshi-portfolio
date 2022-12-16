import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps,router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          {/* <AnimatePresence > */}
            <Component {...pageProps}  />
          {/* </AnimatePresence> */}
        </div>
      </div>
    </ThemeProvider>
  );
}
