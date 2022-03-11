import Section from "../components/Layout/AnimatedSection"
import Layout from "../components/Layout/Common"
import { BluredContainer, HeroContainer } from "../components/Layout/Containers"
import { FeaturedWorkCard, GridWorkCard } from "../components/WorkCard/WorkCard"
import services from '../services/works'
import styles from '../styles/WorksSection.module.css'

const Works = ({ works }) => {
    
    return (
        <Layout title='Works'>
            <Section>
                <BluredContainer>
                    <h3 className="sectionTitle">Works<span>.</span></h3>
                    <div className={styles.cardsWrapper}>
                        {works?.filter(work => work.featured).map(w => 
                            <FeaturedWorkCard href={`/works/${w.id}`} title={w.title} date={w.date} stack={w.stack.slice(0, 2).join(', ')} key={w.id} />
                        )}
                        <div className={styles.gridCards}>
                            {works?.filter(work => !work.featured).map(w =>
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
