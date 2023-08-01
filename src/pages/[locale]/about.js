import Link from '../../components/Link'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { NavigationBar } from '@/components/Navbar/Navbar'
import { Header } from '../../components/Header/Header'
import { useTranslation } from 'next-i18next'
import { Questions } from '@/components/Questions/Questions'


const About = () => {
    const { t } = useTranslation(['about', 'footer'])
    
    return (
      <div>
        <NavigationBar/>
        <Header heading={t('about:h1')} title={t('about:title')} headerText = {t('about:headerText')}/>
        <Questions/>
      </div>
      
    )
  }

  export default About

  const getStaticProps = makeStaticProps(['about', 'footer'])
export { getStaticPaths, getStaticProps }
