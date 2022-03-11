import { BluredContainer } from "../Layout/Containers";
import styles from '../../styles/BioSection.module.css'
import { IoIosArrowForward } from 'react-icons/io'
import Link from "next/link";

export const Personal = () => (
    <BluredContainer>
        <div className={styles.personalData}>
            <div className={styles.flexLeft}>
                <h2>Valentin Cassarino</h2>
                <p>Full stack Developer</p>
            </div>
            <div className={styles.flexRight}>
                <div className={styles.borderProfile} />
                <div className={styles.avatarProfile} />
            </div>
        </div>
    </BluredContainer>
)

const BioYear = ({ year, children }) => {
    return (
        <div className={styles.bioMargin}>
            <div className={ styles.verticalDivider }/>
            <div className={styles.bioData}>
                <span className={styles.dotBio}>.</span><div className={styles.bioBox}><span className={styles.year}>{year}</span><span className={styles.processBio}>{children}</span></div>
            </div>
        </div>
    )
}

const BioSection = () => {
    return (
        <BluredContainer>
                <h3 className="sectionTitle">Bio<span>.</span></h3>
                <div>
                    <p className={styles.bioDescription}>
                        Valen is a full stack developer based in Argentina with a passion for designing and coding stuff. He also likes solving real life problems through code. When not online, he loves hanging out with his friends. Currently, he is studying Computer Science at UNNOBA!
                    </p>
                </div>
                <div >
                    <BioYear year='2001'>
                        Born in Junin, Buenos Aires, Argentina
                    </BioYear>
                    <BioYear year='2021'>
                        Certificate in <a className={styles.certificate} href="https://www.coderhouse.com/certificados/6161e4d95b1b800011c8ebd2?lang=en" target='_blank' rel="noreferrer">Web development</a>
                    </BioYear>
                    <BioYear year='2022'>
                        Certificate in 
                        <a className={styles.certificate} href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/8b91820aa6747bc3e47d0811e6daf368" target='_blank' rel="noreferrer"> Full Stack Development</a>,
                        <a className={styles.certificate} href="https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/1eab945ff92d9a4876912425db47c6e6" target='_blank' rel="noreferrer"> GraphQL</a> and
                        <a className={styles.certificate} href="https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/5660e462f652bd577187f2b1210f4350" target='_blank' rel="noreferrer"> Typescript</a>
                        <br />
                        Started studying Computer Science
                        
                    </BioYear>
                </div>
                <Link href={'/works'} passref>
                    <a><button className={styles.portfolioButton}>My portfolio <IoIosArrowForward /></button></a>
                </Link>
        </BluredContainer>
    )
}

export default BioSection