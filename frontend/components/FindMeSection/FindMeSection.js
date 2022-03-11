import { BluredContainer } from "../Layout/Containers";
import styles from '../../styles/FindMe.module.css'
import Link from "next/link";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'

const Button = ({ children, href }) => {
    return (
        <Link href={href} passHref>
        <a>
            <button className={styles.socialButton}>{children}</button>
        </a>
    </Link>
    )
}

const FindMeSection = () => {
    return (
        <BluredContainer>
            <h3 className='sectionTitle'>Find me<span>.</span></h3>
            <div>
                <Button href={'https://github.com/ValenCassa'}>
                    <AiFillGithub size={20}/><span>/ValenCassa</span>
                </Button>
                <Button href={'https://twitter.com/devcassa'}>
                    <AiOutlineTwitter size={20}/><span>@devCassa</span>
                </Button>
                <Button href={'https://www.linkedin.com/in/valentin-cassarino/'}>
                    <AiFillLinkedin size={20}/><span>Valentin Cassarino</span>
                </Button>
            </div>
        </BluredContainer>
    )
}

export default FindMeSection