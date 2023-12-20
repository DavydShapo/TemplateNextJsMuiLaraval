"use client";

import "./globals.css";
import { theme } from "@/utils/styles/theme";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
