import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = ({ dataLogin, handleClearStorage }) => {

    const [modal, setModal] = useState(false)

    const onHandleClearStorage = () => {
        setModal(false)
        handleClearStorage()
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
            </ul>
            <div onClick={() => setModal(true)} role='button' className='navDataLogin'>
                {
                    dataLogin.firstName.charAt(0).toUpperCase()
                }
            </div>
            {
                modal &&
                <div onClick={() => setModal(false)} role='button' className="navLoginWindows">
                    <div onClick={(e) => e.stopPropagation()} role='button' className="navLoginCard">
                        <div className="navLoginCardTitle">
                            {dataLogin.firstName} {dataLogin.lastName}
                        </div>
                        <div className="navLoginCardAction">
                            <button className='btnSmall' onClick={(_) => onHandleClearStorage()}>Log out</button>
                        </div>
                    </div>
                </div>
            }
        </nav>
    )
}

export default NavBar