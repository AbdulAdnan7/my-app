export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <h1>This is about layout</h1>
        {children}
      </body>
    </html>
  );
}
