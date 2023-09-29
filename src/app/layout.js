import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Here we use dynamic imports and the ssr option to make sure our TopProgressBar is loaded only in browser environements.
const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar/TopProgressBar");
  },
  { ssr: false }
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopProgressBar />
        <Header></Header>
        <div>{children}</div>
      </body>
    </html>
  );
}
