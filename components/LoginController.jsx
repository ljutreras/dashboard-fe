import React, { useState } from 'react'

const LoginController = ({handleSignUp, handleLogin}) => {

    const [signUp, setSignUp] = useState(false);
    const [formSignUp, setFormSignUp] = useState({firstName: '',lastName: '', age: 0,  email: ''});
    const [formLogin, setFormLogin] = useState({email: ''});

    const handleChangeSignUp = (e) => {
        setFormSignUp({...formSignUp, [e.target.name]: e.target.value})
    }

    const handleChangeLogin= (e) => {
        setFormLogin({...formLogin, [e.target.name]: e.target.value})
    }

    const handleSubmitLogin= () => {
        handleLogin(formLogin)
    }

    return (
        <div className='contentLoginController'>
            {
                signUp ? <div className='loginController'>
                    <div className='cardLogin'>
                        <div className="cardTitleLogin">
                            Sign Up to Dashboard!
                        </div>
                        <div className="cardFormLogin">
                            <form onSubmit={() => handleSignUp(formSignUp)}>
                                <input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='firstName' value={formSignUp.firstName} type="text" placeholder="Nombre" />
                                <input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='lastName' value={formSignUp.lastName} type="text" placeholder="Apellido" />
                                <label htmlFor="age">Edad<input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='age' value={formSignUp.age} type="number" min={0} max={99} /></label>           
                                <input onChange={(e)=> handleChangeSignUp(e)} className='w100' name='email' type="email" value={formSignUp.email} placeholder="Correo" />
                                <button type="submit"><span>Sign Up</span></button>
                            </form>
                        </div>
                        <div className="cardActionLogin">
                            <button onClick={() => setSignUp(false)}>Login</button>
                        </div>
                    </div>
                </div> : <div className='loginController'>
                    <div className='cardLogin'>
                        <div className="cardTitleLogin">
                            Welcome to Dashboard!
                        </div>
                        <div className="cardFormLogin">
                            <form onSubmit={(e) => handleSubmitLogin(e)}>
                                <input onChange={(e)=> handleChangeLogin(e)} className='w100' name='email' value={formLogin.email} type="email" placeholder='ex@example.com' />
                                <button type='submit'>Login</button>
                            </form>
                        </div>
                        <div className="cardActionLogin">
                            <p>Estas registrado?</p>
                            <button onClick={() => setSignUp(true)}> Sign Up</button>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default LoginController