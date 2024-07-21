

import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" translate="no">
      <body className="flex h-dvh flex-col transition-all ease-in-out">{children}</body>
    </html>
  );
};

export default RootLayout;
