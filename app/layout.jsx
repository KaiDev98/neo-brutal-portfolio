import "./../styles/globals.css";

export const metadata = {
  title: "Neo‑Brutal Portfolio",
  description: "Futuristic Neo‑Brutalism portfolio — demo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
