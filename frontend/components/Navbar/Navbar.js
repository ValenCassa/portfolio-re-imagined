import Logo from "./resources/Logo"
import ThemeToggleButton from "./resources/ThemeToggleButton"
import Link from 'next/link'
import { useRouter } from "next/router"
import Github from '../../public/img/Github.svg'
import { useState, useContext, useEffect } from 'react'
import { checkCookies } from "cookies-next"
import UserContext from "../../userState/context"
import DropdownMenu from "./resources/DropdownMenu"
import { MdAdminPanelSettings } from 'react-icons/md'

const LinkItem = ({ href, path, _target, children }) => {
    const active = path === href

    return (
        <Link href={href} _target={_target}>
            <a 
            className='childLink'
            id={active ? 'active': undefined}
            >
                { children }
                </a>
        </Link>
    )
}




const Navbar = () => {
    const { pathname } = useRouter()
    const { logOut } = useContext(UserContext)
    const [session, setSession] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const user = checkCookies('user')
        if(user) setSession(true)
    }, [session])

    const onLogOut = (e) => {
        e.preventDefault()
        logOut()

        window.location.href = '/'
    }

    return (
        <>
        <nav className='nav'>
            <div className='navContainer'>
                <div className='leftNavWrapper'>
                    <Logo />
                    <div className='linkGroup'>
                        <LinkItem href='/works' path={ pathname }>
                            Works
                        </LinkItem>
                        <LinkItem href='/posts' path={ pathname }>
                            Posts
                        </LinkItem>
                        <LinkItem href='/twitter.com' path={ pathname } _target='_blank' >
                            <div className='githubButton'>
                                <Github className='githubIcon'/>
                                Source
                            </div>
                        </LinkItem>
                    </div>
                </div>
                <div className='rightNavWrapper'>
                    <ThemeToggleButton />
                    {session && 
                    <DropdownMenu mobile={false} icon={<MdAdminPanelSettings size={20}/>}>
                        <Link href='/admin/dashboard' passRef>
                            <a className='menuItem'>Dashboard</a>
                        </Link> 
                        <Link href='/admin/dashboard/work' passRef>
                            <a className='menuItem'>New work</a>
                        </Link>
                        <Link href='/admin/dashboard/post' passRef>
                            <a className='menuItem'>New post</a>
                        </Link>
                            <button className="logOutMenu" onClick={onLogOut}>
                                Log Out
                            </button>
                    </DropdownMenu>
                    }

                    <DropdownMenu mobile={true} icon='...'>
                        <Link href='/' passRef>
                            <a className='menuItem' >Bio</a>
                        </Link> 
                        <Link href='/works' passRef>
                            <a className='menuItem'>Works</a>
                        </Link>
                        <Link className='menuItem' href='/posts' passRef>
                            <a className='menuItem'>Posts</a>
                        </Link>
                        <Link className='menuItem' href='https://github.com/ValenCassa' passRef>
                            <a className='menuItem'><Github className='githubIcon' style={{ marginRight: '0.4em', transform: 'translateY(0.1em)' }} />Source</a>
                        </Link>
                    </DropdownMenu>
                </div>
            </div>
        </nav>

                </>
    )
}
export default Navbar