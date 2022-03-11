import Layout from "../../components/Layout/Common"
import { BluredContainer } from "../../components/Layout/Containers"
import Meta from "../../components/Layout/Meta"
import {default as WorkLayout} from "../../components/Layout/Work"
import services from '../../services/works'


const Work = ({ work }) => {
    return (
        <>
        <Meta title={work.title} description={work.content} image={work.imagePath} />
        <Layout title={work.title}>
            <BluredContainer>
                <WorkLayout 
                value={work.content} 
                file={work.imagePath} 
                title={work.title} 
                platform={work.platform} 
                stack={work.stack}
                website={work.website}
                date={work.date}
                previous={'Works'}
                previousLink={'/works'}
                />
            </BluredContainer>
        </Layout>
        </>
    )
}

export const getStaticPaths = async () => {
    const works = await services.getAll('works')

    return {
        paths: works.map((work) => ({
            params: {
                slug: work.id
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }) => {

    let work = await services.getOne({ id: params.slug, type: 'works' })
    
    return { 
        props: { work },
        revalidate: 1,
    }
}

export default Work