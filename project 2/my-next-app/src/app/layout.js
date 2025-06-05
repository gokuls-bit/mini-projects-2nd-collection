// app/layout.jsx
export const metadata = {
  title: 'Weather App',
  description: 'Professional weather app using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
