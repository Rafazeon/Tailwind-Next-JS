"use client";

import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"
        rel="stylesheet"
      />
      <body style={{ background: "#fff" }} className={roboto.className}>
      {children}
      </body>
    </html>
  );
}
