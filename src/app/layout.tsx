import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "@/lib/theme";
import AppAppBar from "@/components/AppAppbar";
import { CartProvider } from "@/context/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Marketplace Customer",
  description: "Customer facing side of marketplace website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CartProvider>
              <AppAppBar />
              {children}
            </CartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
