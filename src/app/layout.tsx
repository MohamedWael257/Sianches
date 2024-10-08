import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import dynamic from 'next/dynamic';
const AuthProvider = dynamic(() => import('@/context/AuthContext').then(mod => mod.AuthProvider), { ssr: false });
const Header = dynamic(() => import('../components/header/Header'));
const Footer = dynamic(() => import('../components/footer/Footer'));
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Sianches",
  description: "Generated by Al Almiya Alhura",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
