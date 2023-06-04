import Head from 'next/head'

export const Header = ({ heading, title }) => (
  <div className='bg-blue-700 text-white'>
    <Head>
      <title>{title}</title>
    </Head>
    <h1 className="text-3xl font-bold">{heading}</h1>
  </div>
)
