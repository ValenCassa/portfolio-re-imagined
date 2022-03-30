import Section from "../components/Layout/AnimatedSection"
import Layout from "../components/Layout/Common"
import { BluredContainer } from "../components/Layout/Containers"
import PostCard from "../components/PostCard/PostCard"
import services from '../services/works'
import styles from '../styles/PostsPage.module.css'

const Posts = ({ posts }) => {
    return (
        <Layout title={'Posts'}>
            <Section>
                <BluredContainer>
                    <h3 className="sectionTitle">Posts<span>.</span></h3>
                    <div>
                        <div className={styles.cardsContainer}>
                            {posts.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => 
                                <PostCard post={post} href={`/posts/${post.id}`} key={post.id}/>
                                )}
                        </div>
                    </div>
                </BluredContainer>
            </Section>
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const posts = await services.getAll('blogs')

    return {
        props: { posts }
    }
}

export default Posts