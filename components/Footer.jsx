import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <div>
                        <h3>Sobre Dashboard</h3>
                        <p className='aboutFooter'>Dashboard es una plataforma donde podras encontrar los usuarios registrados en la plataforma</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Copyright 2023 Dashboard Company. All rights reserved.
                </div>
                <div>
                    Diseñado por <Link href={'https://www.linkedin.com/in/leonardo-utreras/'}>Leonardo Utreras</Link>
                </div>
            </div>
    </footer >
  )
}

export default Footer