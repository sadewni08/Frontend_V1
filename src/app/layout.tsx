import './globals.css';



export const metadata = {
  title: 'CiviLink',
  description: "Sri Lanka's Largest Construction Network",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white py-4 text-center">
          <h1>CiviLink</h1>
        </header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} CiviLink. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
