import { checkCookies } from "cookies-next"
import { BluredContainer } from "../../../components/Layout/Containers"
import Section from '../../../components/Layout/AnimatedSection'
import styles from '../../../styles/Dashboard.module.css'
import { FeaturedWorkCard, GridWorkCard } from "../../../components/WorkCard/WorkCard"
import Link from 'next/link'
import Layout from "../../../components/Layout/Common"
import services from '../../../services/works'
import { useState } from "react"
import PostCard from "../../../components/PostCard/PostCard"

const CreateHeader = ({ title, href, onDelete, name }) => {
    return (
        <div>
            <h4 className={styles.blogDashboard}>{ title }<span>.</span></h4>
            <div className={styles.buttonContainer}>
                <Link href={href} passHref>
                    <button className={styles.newButton}>New {name}</button>
                </Link>
                <button className={styles.deleteButton} onClick={onDelete}>Delete all</button>
            </div>
        </div>
    )
}

const AdminWorks = ({ worksData }) => {
    const [works, setWorks] = useState(worksData)

    const onDelete = async (e) => {
        e.preventDefault()

        try {
            await services.deleteAll('works')
            setWorks([])
            console.log('success')
        } catch (error) {
            console.log(error.message)
        }

    }

    const onDeleteOne = async (event, id) => {
        event.preventDefault()

        try {
            await services.deleteOne({ id, type: 'works' })
            setWorks(works.filter(w => w.id !== id))
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Section delay={0.1}>
            <BluredContainer>
                <CreateHeader title={'Works'} href={ '/admin/dashboard/work' } name={ 'work' } onDelete={onDelete}/>
                <div className={styles.cardsWrapper}>
                    {works.filter(work => work.featured).map(w => 
                            <FeaturedWorkCard onDelete={(e) => onDeleteOne(e, w.id) } href={`/admin/dashboard/works/${w.id}`} title={w.title} date={w.date} stack={w.stack.slice(0, 2).join(', ')} deleteable={true} key={w.id} />
                        )}


                    <div className={styles.gridCards}>
                        {works.filter(work => !work.featured).map(w =>
                            <GridWorkCard onDelete={(e) => onDeleteOne(e, w.id) } href={`/admin/dashboard/works/${w.id}`} key={w.id} title={w.title} date={w.date} stack={w.stack?.slice(0, 2).join(', ')} featured={w.featuredTech} deleteable={true}/>
                            )}
                    </div>
                </div>
            </BluredContainer>
        </Section>
    )
}

const AdminPosts = ({ postsData }) => {
    const [posts, setPosts] = useState(postsData)

    const onDelete = async (e) => {
        e.preventDefault()

        try {
            await services.deleteAll('blogs')
            setPosts([])
            console.log('success')
        } catch (e) {
            console.log(e.message)
        }
    }

    const onDeleteOne = async (event, id) => {
        event.preventDefault()

        try {
            await services.deleteOne({ id, type: 'blogs' })
            setPosts(posts.filter(p => p.id !== id))
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <Section delay={0.2}>
            <BluredContainer>
              <CreateHeader title={'Posts'} href={'/admin/dashboard/post'} name='post' onDelete={onDelete}/>  
                <div>
                    {posts.map(p => 
                    
                    <PostCard post={p} href={`/admin/dashboard/posts/${p.id}`} key={p.id} deleteable={true} onDelete={(e) => onDeleteOne(e, p.id)}/>
                    
                        )}

                </div>
            </BluredContainer>    
        </Section>
    )
}

const AdminPanel = ({ works, posts }) => {

    return (
    <Layout title='Dashboard'>
        <Section>
        <BluredContainer>
            <h3 className="sectionTitle" id="dashboard">Dashboard<span>.</span></h3>
        </BluredContainer>
        </Section>
        <AdminWorks worksData={works}/>
        <AdminPosts postsData={posts}/>
    </Layout>
    )
}

export const getServerSideProps = async ({ req, res }) => {
    const user = checkCookies('user', { req, res })

    if (!user) {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            },
            props: {}
        }
    }

    let works = await services.getAll('works')
    let posts = await services.getAll('blogs')
    
    return { 
        props: { works, posts },
    }
}


export default AdminPanel