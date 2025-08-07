import './globals.css';
import type { ReactNode } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export const metadata = {
  title: 'KEIDF - Transforming Education Through Marine Science',
  description: 'Join the movement to revolutionize environmental education across Namibia. Bold. Innovative. Impact-driven.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ScrollProgress />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
