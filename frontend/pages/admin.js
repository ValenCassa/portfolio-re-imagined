import styles from '../styles/AdminLogin.module.css'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { useState, useContext, useEffect } from 'react'
import UserContext from '../userState/context'
import login from '../services/admin'
import Link from 'next/link'
import { checkCookies } from 'cookies-next'


const LoginForm = ({ logIn, setUser }) => {
    const [hide, setHide] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onHide = (e) => {
        e.preventDefault()
        setHide(!hide)
    }

    const onLogin = async (e) => {
        e.preventDefault()
        
        try {
            const user = await login({username, password})
            setUser(true)
            logIn(user)
        } catch(e) {
            setError('Invalid username or password')

            setTimeout(() => {
                setError('')
            }, 4000)
        }   
    }

    return (
        <>
        {error !== '' && <p className={styles.error}>{ error }</p>}
        <form className={styles.formLogin} onSubmit={onLogin}>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username...' />
            <div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password...' type={hide ? 'text': 'password'} />
                <button className={styles.watch} onClick={onHide}>
                    {hide ? <AiFillEye />: <AiFillEyeInvisible />}
                </button>
            </div>

            <button className={styles.submitLogin} type='submit'>Login</button>
        </form>
        </>
    )

}

const AdminLogin = () => {
    const { logIn, logOut } = useContext(UserContext)
    const [user, setUser] = useState(false)


    useEffect(() => {
        const userInfo = checkCookies('user')
        if(userInfo) {
            logIn(userInfo)
            setUser(true)
        } 
    }, [])

    const onLogOut = (e) => {
        e.preventDefault()
        logOut()
        setUser(false)
    }

    return (
        <div className={styles.adminContainer}>
            <div className={styles.adminLogin}>
                <h4>Login</h4>
                {!user && 
                <div>
                    <LoginForm logIn={logIn} setUser={setUser}/>
                </div>
                }

                {user &&
                <>
                    <button onClick={onLogOut} className={styles.logOut}>Log out</button> 
                    <div className={styles.logged}>
                        <p>Already logged. Head to <Link href={'/admin/dashboard'} passHref><a className={styles.panelLink}>panel</a></Link></p>
                    </div>
                </>
                }

            </div>
        </div>
    )
}

export default AdminLogin