import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Noam — Développeur web',
  description: 'Le portfolio de Noam : développement web, interfaces et projets créatifs.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
