import "./globals.css";
import { ProgressProvider } from "./context/ProgessContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProgressProvider>{children}</ProgressProvider>
      </body>
    </html>
  );
}