import Link from '../../components/Link'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { NavigationBar } from '@/components/Navbar/Navbar'
import { Header } from '../../components/Header/Header'
import { useTranslation } from 'next-i18next'


const Contact = () => {
    const { t } = useTranslation(['contact', 'footer'])
    
    return (
      <div>
        <NavigationBar/>
        <Header heading={t('contact:h1')} title={t('contact:title')} headerText = {t('contact:headerText')}/>
        
      </div>
      
    )
  }

  export default Contact

  const getStaticProps = makeStaticProps(['contact', 'footer'])
export { getStaticPaths, getStaticProps }
