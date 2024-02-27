import Link from '@docusaurus/Link'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'
import WWHA from '@site/static/img/wwha-badge.png'

const FeatureList = [
    {
        title: 'Local',
        description: (
            <>
                The HomeWizard Energy API is available on your local network. This means that you can use it without an internet connection. You can even turn off the connection with the <Link to='/docs/endpoints/api-v1-system'>Cloud</Link>
                .
            </>
        )
    },
    {
        title: 'Easy to use',
        description: (
            <>
                The API is easy to use. You can use it with any programming language that supports HTTP requests. Use our official <Link to='https://github.com/homewizard/python-homewizard-energy'>Python library</Link> to get some examples.
            </>
        )
    },
    {
        title: 'Integrable',
        description: (
            <>
                The API allows to integrate with other smart home solutions, like <Link to='https://www.home-assistant.io/integrations/homewizard/'>Home Assistant</Link>.
                <br />
                <br />
                <Link to='https://www.home-assistant.io/integrations/homewizard/'>
                    <img src={WWHA} height='75' width='300' alt='HomeWizard works locally with Home Assistant (badge)' />
                </Link>
            </>
        )
    }
]

function Feature({ title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className='text--center padding-horiz--md'>
                <Heading as='h3'>{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className='container'>
                <div className='row'>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
