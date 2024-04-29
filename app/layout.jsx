import { Inter } from "next/font/google";
import "../styles/globals.css";
import Provider from "@Components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Fox",
  description:
    "Join us in revolutionizing digital transactions with Fox Crypto's secure blockchain solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
