import "./globals.css";
import { Inter, Rubik } from "next/font/google";
// SF Pro Text
const inter = Inter({ subsets: ["latin"] });
const rubik = Inter({ subsets: ["latin"] });

// import localFont from "@next/font/local";

// const poppins = localFont({
//   src: [
//     {
//       path: "../../public/fonts/Poppins-Regular.ttf",
//       weight: "400",
//     },
//     {
//       path: "../../public/fonts/Poppins-Bold.ttf",
//       weight: "700",
//     },
//   ],
//   variable: "--font-poppins",
// });

export const metadata = {
  title: "Winden",
  description: "Zero Fees, No Credit Check",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, rubik.className)}>{children}</body>
    </html>
  );
}
