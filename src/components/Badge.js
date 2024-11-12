import React from 'react'

import { Icon } from '@iconify/react' // Import the entire Iconify library.

export default function Badge({ children, icon, color, subtext = null, detail = null }) {
    switch (color) {
        case 'hw-orange':
            color = '#ff7100'
            break
        case 'hw-blue':
            color = '#37baff'
            break
        case 'hw-grey':
            color = '#7c7c7c'
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
                display: 'inline-block'
            }}
        >
            <span
                style={{
                    // display: 'inline-block',
                    backgroundColor: color,
                    borderRadius: '99px',
                    color: '#fff',
                    padding: '0.1rem 0.5rem',
                    marginBottom: '0.2rem',
                    whiteSpace: 'nowrap',
                    width: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                }}
            >
                {/* Left */}
                <Icon
                    style={{
                        margin: '0 auto',
                        alignSelf: 'center',
                        marginRight: '0.3rem'
                    }}
                    icon={icon}
                />

                {/* Right */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        paddingRight: '0.5rem'
                    }}
                >
                    {/* Right Top */}
                    <div
                        style={{
                            fontWeight: 'bold',
                            fontSize: '85%'
                        }}
                    >
                        {children}
                    </div>

                    {/* Right Bottom */}
                    {subtext && (
                        <div
                            style={{
                                fontSize: '70%',
                                marginTop: '-0.3rem'
                            }}
                        >
                            {subtext}
                        </div>
                    )}
                </div>

                {/* Detail */}
                {detail && (
                    <span
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Darker background color
                            borderRadius: '99px',
                            color: '#111828',
                            fontWeight: 'bold',
                            fontSize: '75%',
                            padding: '0rem 0.3rem',
                            alignSelf: 'center',
                            marginRight: '-0.3rem'
                        }}
                    >
                        {detail}
                    </span>
                )}
            </span>
        </span>
    )
}
