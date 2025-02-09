/* eslint-disable @typescript-eslint/no-unused-vars */
import "@/styles/globals.css";
import { RozhaOne } from "./fonts";

export const metadata = {
  title: "AiCook - Smart Recipes",
  description: "Transform Ingredients into Culinary Masterpieces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={RozhaOne.className}>{children}</body>
    </html>
  );
}
