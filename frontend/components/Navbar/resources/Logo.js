import Link from 'next/link'
import Image from 'next/image'
import { useDarkMode } from '../../../hooks/useDarkMode'

const Logo = () => {
    const logoImage = `/img/logo${useDarkMode('', '-dark')}.png`

    return (
        <div className="logoContainer">
            <Link href='/'>
                <span className='logoBox'>
                    <Image src={logoImage} width='21px' height='21px' alt='logo'/>
                    <h1 className='myName'>Valentin Cassarino</h1>
                </span>
            </Link>
        </div>
    )
}

export default Logo