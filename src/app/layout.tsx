import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, ResolvingMetadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

 
type Props = {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const lang = params.lang;

  return {
    title: "AWDP",
    description: "Asian Women Development Plan - International", 
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
