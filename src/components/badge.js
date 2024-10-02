import React from 'react'

export default function Badge({ children, color }) {
    switch (color) {
        case 'hw-orange':
            color = '#ff7100'
            break
        case 'hw-blue':
            color = '#37baff'
            break
        case 'hw-purple':
            color = '#aa00fe'
            break
        case 'hw-green':
            color = '#2fc052'
            break
        case 'hw-red':
            color = '#ff0072'
            break
    }

    return (
        <span
            style={{
                display: 'inline-block',
                backgroundColor: color,
                borderRadius: '99px',
                color: '#fff',
                fontWeight: 'bold',
                padding: '0.1rem 0.5rem',
                marginBottom: '1rem'
            }}
        >
            {children}
        </span>
    )
}
