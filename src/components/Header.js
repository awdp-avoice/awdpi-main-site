import Head from 'next/head'

export const Header = ({ heading, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 className="text-3xl font-bold underline">{heading}</h1>
  </>
)
