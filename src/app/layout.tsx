import AppNavBar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MADM",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items: { text: string; link: string }[] = [
    { text: "Product", link: "/products" },
    { text: "Model", link: "/models" },
    { text: "Add Product", link: "/products" },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <AppNavBar title="MADM" items={items} />
          <div className="p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
