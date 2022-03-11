import services from '../../../../services/works'
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { checkCookies } from "cookies-next";
import CreateUpdatePost from "../../../../components/CreateTool/CreateUpdatePost";

const UpdatePost = ({ post }) => {
    const user = checkCookies('user')
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/')
        }
    }, [router, user])

    const defaultState = {
        title: post.title,
        type: post.type,
        content: post.content,
        date: post.date,
        image: undefined,
    }

    return (
        <CreateUpdatePost 
            state={defaultState}
            title={'Update Post'}
            image={post.imagePath}
            id={post.id}
        />
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
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    let post = await services.getOne({ id: params.slug, type: 'blogs' })

    return {
        props: { post }
    }
}

export default UpdatePost