import Head from 'next/head'
import type { FC } from 'react'

type Props = {
  heading: string
  title: string
}

export const Header: FC<Props> = ({ heading, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{heading}</h1>
    <a className="github" href="//github.com/i18next/next-i18next">
      <i className="typcn typcn-social-github-circular" />
    </a>
  </>
)
