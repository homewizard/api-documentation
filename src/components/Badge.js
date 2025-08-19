import React from 'react'

import { Icon } from '@iconify/react' // Import the entire Iconify library.

export default function Badge({ children, icon, colorName, subtext = null, detail = null }) {
    let background, color

    switch (colorName) {
        // case 'hw-purple':
        //     background = '#aa00fe'
        //     color = '#fff'
        //     break
        case 'hw-green':
            background = 'linear-gradient(90deg, #20f29b 0%, #02dace 100%)'
            color = '#3E3849'
            break
        case 'hw-grey':
        default:
            background = '#7c7c7c'
            color = '#fff'
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
                    background: background,
                    borderRadius: '8px',
                    color: color,
                    padding: '0.1rem 0.5rem',
                    marginBottom: '0.2rem',
                    whiteSpace: 'nowrap',
                    width: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    fontFamily: 'Poppins, sans-serif'
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
                            background: 'rgba(255, 255, 255, 0.9)', // Darker background color
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
