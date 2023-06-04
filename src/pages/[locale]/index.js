import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout'

console.log(Layout)

import Link from '../../components/Link'

const Homepage = () => {
  const { t } = useTranslation(['common', 'footer'])

  return (
    <Layout>
      <main>
        {/* <div>
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
        </div> */}
        <div id="our_programs" className='mx-auto text-center'>
          <h2 className='mx-auto'>Our Programs</h2>
          <div className='grid grid-rows-2'>
            <div className='grid grid-cols-2'>
              <div>Against Violence to Overseas Chinese Women</div>
              <div>Campaign Against Gender Based Violence</div>
            </div>
            <div className='grid grid-cols-2'>
              <div>Against Violence to Overseas Chinese Women</div>
              <div>Campaign Against Gender Based Violence</div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }
