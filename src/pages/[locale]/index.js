import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { Header } from '../../components/Header/Header'
import { Layout } from '../../components/Layout'

import Link from '../../components/Link'
import { NavigationBar } from '@/components/Navbar/Navbar'
import { Assistance } from '@/components/Assistance/Assistance'
import { Donate } from '@/components/Donate/Donate'
import { Events } from '@/components/Events/Events'
import { Achievements } from '@/components/Achievements/Achievements'

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer'])
  return (
    <div>
      <NavigationBar/>
      <Header heading={t('h1')} title={t('title')} headerText = {t('headerText')}/>
      <Achievements/>
      <Assistance assistanceText={t('assistanceText')}/>
      <Donate />
      <Events />
    </div>
    
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
