import QueryProvider from "@/core/providers/query-provider";
import "./globals.css";

export const metadata = {
  title: "MB Academy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
