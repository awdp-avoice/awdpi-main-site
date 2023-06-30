import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout'

import Link from '../../components/Link'
import { Navbar } from '@/components/Navbar/Navbar'
import { Assistance } from '@/components/Assistance/Assistance'

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer'])

  return (
    <div>
      <Navbar/>
      <Header heading={t('h1')} title={t('title')} headerText = {t('headerText')}/>
      <Assistance assistanceText={t('assistanceText')}/>
    </div>
    
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
