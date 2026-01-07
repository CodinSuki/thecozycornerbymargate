import './globals.css'

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with hand-picked recommendations",
  verification: {
    google: 'a3uFpKLX9_5aq68QqiBihUmYbSA_YYTM414ZNSeBB2Q',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}