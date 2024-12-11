import Admonition from '@theme/Admonition'

export default function PreliminaryWarning() {
    return (
        <div>
            <Admonition type='warning'>
                <p>
                    The HomeWizard Energy API v2 and its documentation are in beta and subject to change. Complete{' '}
                    <a href='https://forms.gle/hLuTQcAEDaTJA8FX9' target='_blank'>
                        this form
                    </a>{' '}
                    to join the beta test group.
                </p>
            </Admonition>
        </div>
    )
}
