import React from 'react'

export default function BadgeDetail({ children, href }) {
    return (
        <span
            style={{
                display: 'inline-block',
                backgroundColor: 'rgba(255, 255, 255, 0.9)', // Darker background color
                borderRadius: '99px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '75%',
                verticalAlign: 'middle',
                padding: '0.05rem 0.5rem',
                marginTop: '-0.15rem',
                marginRight: '-0.2rem'
            }}
        >
            <a
                style={{
                    textDecoration: 'none',
                    color: '#111828'
                }}
                href={href}
            >
                {children}
            </a>
        </span>
    )
}
