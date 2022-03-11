import { BluredContainer } from "../Layout/Containers";
import styles from '../../styles/SkillsSection.module.css'
import SkillCard from "./resources/SkillCard";
import ReactSVG from '../../public/img/React.svg'
import NextSVG from '../../public/img/Next.svg'
import Redux from '../../public/img/Redux.svg'
import Typescript from '../../public/img/Typescript.svg'
import Node from '../../public/img/Node.svg'
import Mongo from '../../public/img/Mongo.svg'
import Express from '../../public/img/Express.svg'
import GraphQL from '../../public/img/Graph.svg'
import Jest from '../../public/img/Jest.svg'
import Cypress from '../../public/img/Cypress.svg'
import Testing from '../../public/img/Testing.svg'

const SkillsSection = () => {
    return (
        <BluredContainer>
            <h3 className="sectionTitle">Skills<span>.</span></h3>
            <div>
                <div className={styles.skillsTitle}>
                    <p className={styles.frontend}>Front-end</p>
                </div>
                <div className={styles.cardsWrapper}>
                    <SkillCard styles={styles} skill={'React'}>
                        <ReactSVG />
                    </SkillCard>
                    <SkillCard styles={styles} skill={'Next'}>
                        <NextSVG />    
                    </SkillCard> 
                    <SkillCard styles={styles} skill={'Redux'}>
                        <Redux />
                    </SkillCard>
                    <SkillCard styles={styles} skill={'Typescript'}>
                        <Typescript />
                    </SkillCard>        
                </div>
            </div>

            <div>
                <div className={styles.skillsTitle} id={styles.nextTitle}>
                    <p className={styles.backend}>Back-end</p>
                </div>
                <div className={styles.cardsWrapper}>
                    <SkillCard styles={styles} skill={'NodeJs'}>
                        <Node />
                    </SkillCard>
                    <SkillCard styles={styles} skill={'MongoDB'}>
                        <Mongo />    
                    </SkillCard> 
                    <SkillCard styles={styles} skill={'ExpressJs'}>
                        <Express />
                    </SkillCard>
                    <SkillCard styles={styles} skill={'GraphQL'}>
                        <GraphQL />
                    </SkillCard>        
                </div>
            </div>

            <div>
                <div className={styles.skillsTitle} id={styles.nextTitle}>
                    <p className={styles.tests}>Tests</p>
                </div>
                <div className={styles.cardsWrapper}>
                    <SkillCard styles={styles} skill={'Jest'}>
                        <Jest />
                    </SkillCard>
                    <SkillCard styles={styles} skill={'Cypress'}>
                        <Cypress />    
                    </SkillCard> 
                    <SkillCard styles={styles} skill={'Testing-Library'}>
                        <Testing />
                    </SkillCard>        
                </div>
            </div>
            
        </BluredContainer>
    )
}

export default SkillsSection