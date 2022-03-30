import Section from "../components/Layout/AnimatedSection"
import Layout from "../components/Layout/Common"
import { BluredContainer } from "../components/Layout/Containers"
import { FeaturedWorkCard, GridWorkCard } from "../components/WorkCard/WorkCard"
import services from '../services/works'
import styles from '../styles/WorksSection.module.css'
import { Collapse } from 'react-collapse'
import { useState } from "react"
import { IoIosArrowForward } from 'react-icons/io'


const Works = ({ works }) => {
    const [open, setOpen] = useState(false)

    const onOpen = (e) => {
        e.preventDefault()
        setOpen(!open)
    }
    
    return (
        <Layout title='Works'>
            <Section>
                <BluredContainer>
                    <h3 className="sectionTitle">Works<span>.</span></h3>
                    <div onClick={(e) => onOpen(e)} className={styles.collapse}>
                        <p>Read this first!</p>
                        <IoIosArrowForward color="white" id={open ? styles.rotated: undefined}/>
                    </div>
                    <Collapse isOpened={open} initialStyle={{height: '0px', overflow: 'hidden'}}>
                        If you want to see my projects clicking on the website link, you will notice that they will load really slow. Be patient, I&apos;m using the free Heroku plan to host them, that means servers are &apos;asleep&apos; until someone wants to load the page. You will also notice that they are not styled or are styled really bad. I did not intend to make them look great, but to learn the backend and apply what I learned in the front-end. 
                    </Collapse>
                    
                    <div className={styles.cardsWrapper}>
                        {works?.filter(work => work.featured).map(w => 
                            <FeaturedWorkCard href={`/works/${w.id}`} title={w.title} date={w.date} stack={w.stack.slice(0, 2).join(', ')} key={w.id} />
                        )}
                        <div className={styles.gridCards}>
                            {works?.filter(work => !work.featured).sort((a, b) => new Date(b.date) - new Date(a.date)).map(w =>
                                <GridWorkCard href={`/works/${w.id}`} key={w.id} title={w.title} date={w.date} stack={w.stack?.slice(0, 2).join(', ')} featured={w.featuredTech} />
                            )}
                        </div>
                    </div>
                </BluredContainer>
            </Section>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const works = await services.getAll('works')

    return {
        props: { works }
    }
}

export default Works
