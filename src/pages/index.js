import clsx from 'clsx'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import Heading from '@theme/Heading'
import styles from './index.module.css'

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className='container'>
                <Heading as='h1' className='hero__title'>
                    Local API Documentation.
                </Heading>
                {/* <p className='hero__subtitle'>Local API Documentation</p> */}
                <div className={styles.buttons}>
                    <Link className='button button--primary button--lg' to='/docs/introduction'>
                        Get started
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default function Home() {
    return (
        <Layout title={`HomeWizard Energy API Documentation`} description='Learn how to use the HomeWizard Energy Local API.'>
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    )
}
