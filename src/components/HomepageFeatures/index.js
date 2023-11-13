import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
    {
        title: 'Local',
        description: <>The HomeWizard Energy API is available on your local network. This means that you can use it without an internet connection.</>
    },
    {
        title: 'Easy to use',
        description: <>The API is easy to use. You can use it with any programming language that supports HTTP requests.</>
    },
    {
        title: 'Integration',
        description: (
            <>
                The API allows to integrate with other smart home solutions, like <a href='https://www.home-assistant.io/integrations/homewizard/'>Home Assistant</a>
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
