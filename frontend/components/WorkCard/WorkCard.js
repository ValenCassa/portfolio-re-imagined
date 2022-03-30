import styles from '../../styles/WorkCard.module.css'
import Featured from '../../public/img/featured.svg'
import Link from 'next/link'
import { SiNodedotjs, SiReact, SiDocker, SiGraphql, SiTypescript, SiMongodb, SiPostgresql, SiElectron, SiGithub } from 'react-icons/si'
import { IoMdArrowDropright } from 'react-icons/io'
import { createRipple } from '../utils/createRipple'
import { useRouter } from 'next/router'
import { BiTrash } from 'react-icons/bi'


export const FeaturedWorkCard = ({ date, title, stack, href, deleteable, onDelete}) => {

    const router = useRouter()
    
    const onClick = (e) => {
        if(e.target['tagName'] === 'DIV' && deleteable) {
            createRipple(e)
            router.push(href)
        }

        if(deleteable === undefined) {
            createRipple(e)
            router.push(href)
        }
    }

    return (
        <div className='buttonRipple' onClick={onClick}>
            <div className={styles.cardFeatWrapper}>
                <div className={styles.cardFeatHeader} id={deleteable ? styles.deleteable: undefined}>
                    <div className={styles.leftHeader}>
                        <p className={styles.featDate}>{date}</p>
                        <h2 className={styles.featCardTitle}>{title}</h2>
                    </div>
                    {deleteable && 
                    <div className={styles.svg} onClick={onDelete}>
                        <BiTrash color='#f14c4c' size={22}/>
                    </div>
                    }

                </div>
                <div className={styles.featCardBody}>
                    <Featured />    
                </div>
                <div className={styles.featFooterCard}>
                    <div className={styles.footerFeatContent}>
                        <p className={styles.featTech}>{stack}</p>
                        <Link href={href} passHref>
                            <a>
                                <button className={styles.featWorkButton}>
                                Know more    
                                </button>
                            </a>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
}

export const GridWorkCard = ({ date, title, stack, href, featured, deleteable, onDelete }) => {
    const router = useRouter()

    
    const onClick = (e) => {
        if(e.target['tagName'] === 'DIV' && deleteable) {
            createRipple(e)
            router.push(href)
        }

        if(deleteable === undefined) {
            createRipple(e)
            router.push(href)
        }
    }


    return (
        <div className='buttonRipple' onClick={onClick}>
            <div className={styles.cardGridWrapper}>
                <div className={styles.cardGridHeader}>
                    <p className={styles.gridDate}>{date}</p>
                    <h2 className={styles.gridCardTitle}>{title}</h2>
                </div>
                <div className={styles.gridCardBody}>
                    <svg width="0" height="0">
                        <linearGradient id="cardfill" x1="-3.01279" y1="-28.8078" x2="26.5058" y2="50.6447" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                    </svg>
                    {featured === 'NodeJs' && <SiNodedotjs className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'React' && <SiReact className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'Docker' && <SiDocker className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'GraphQL' && <SiGraphql className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'Typescript' && <SiTypescript className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'MongoDB' && <SiMongodb className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'SQL' && <SiPostgresql className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'Electron' && <SiElectron className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    {featured === 'CI/CD' && <SiGithub className={styles.techSVG} style={{ fill: 'url(#cardfill)' }} size={160}/>}
                    
                </div>

                <div className={styles.gridFooterCard}>
                    <div className={styles.gridFooterContent}>
                        <p className={styles.gridTech}>
                            {stack}
                        </p>
                        {deleteable ? 
                        <div className={styles.svg} onClick={onDelete} >
                            <BiTrash color='#f14c4c' size={22}/>
                        </div> :
                        <div className={styles.gridButton}>
                        <Link href={href} passHref>
                                <button className={styles.gridWorkButton}>
                                <IoMdArrowDropright />   
                                </button>
                            
                        </Link>
                        </div>
                                    }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
