import Layout from "../../components/Layout/Common"
import { BluredContainer } from "../../components/Layout/Containers"
import Meta from "../../components/Layout/Meta"
import {default as PostLayout} from '../../components/Layout/Post'
import services from '../../services/works'

const Post = ({ post }) => {
    return (
        <>
        <Meta title={post.title} description={post.content} image={post.imagePath} />
        <Layout title={post.title}>
            <BluredContainer>
                <PostLayout 
                    value={post.content} 
                    file={post.imagePath} 
                    date={post.date} 
                    type={post.type}
                    previous={'Posts'}
                    previousLink={'/posts'}
                    title={post.title}
                />
            </BluredContainer>
        </Layout>
        </>
    )
}


export const getStaticPaths = async () => {
    const posts = await services.getAll('blogs')

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.id
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }) => {
    let post = await services.getOne({ id: params.slug, type: 'blogs' })

    return {
        props: { post },
        revalidate: 1,
    }
}

export default Post