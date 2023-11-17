import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import LoginController from "./LoginController"
import { useEffect, useState } from "react"

const Layout = ({ children }) => {

    const [isLogin, setIsLogin] = useState(null)
    const [dataLogin, setDataLogin] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        email: ''
    })

    const handleSignUp = async (signUp) => {
        fetch(`http://localhost:3001/user/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUp)
        }).then((response) => {
                if (response) {
                    setDataLogin(signUp)
                    localStorage.setItem('firstName', signUp.firstName)
                    localStorage.setItem('lastName', signUp.lastName)
                    localStorage.setItem('age', signUp.age)
                    localStorage.setItem('email', signUp.email)
                    setIsLogin(true)
                    return;
                }
                console.error('invalid sign up')
            });
    }

    const handleLogin = async (login) => {
        fetch(`http://localhost:3001/user/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        }).then((response) => response.json())
            .catch((error) => {
                console.error("Error:", error)
                alert('invalid login')
            })
            .then((response) => {
                if (response) {
                    setDataLogin(response)
                    localStorage.setItem('firstName', response.firstName)
                    localStorage.setItem('lastName', response.lastName)
                    localStorage.setItem('age', response.age)
                    localStorage.setItem('email', response.email)
                    setIsLogin(true)
                    return;
                }
                console.error('invalid login')
            });
    }

    const handleClearStorage = () => {
        localStorage.clear()
        setIsLogin(false);
    }

    useEffect(() => {
        const firstName = localStorage.getItem('firstName')
        const lastName = localStorage.getItem('lastName')
        const age = localStorage.getItem('age')
        const email = localStorage.getItem('email')
        if (email){
            setIsLogin(true)
            setDataLogin({
                firstName,
                lastName,
                age,
                email,
            })
        } else{
            setIsLogin(false);
        } 
    }, [])


    return (
        <>
            {
                isLogin !== null &&
                <>
                    <Header handleClearStorage={handleClearStorage} dataLogin={dataLogin} />
                    {isLogin && <Main>
                        {children}
                    </Main>}
                    <Footer />
                    {!isLogin && <LoginController handleSignUp={handleSignUp} handleLogin={handleLogin} />}
                </>
            }
        </>
    )
}

export default Layout