import CreateUpdate from "../../../../components/CreateTool/CreateUpdate";
import services from '../../../../services/works'
import { checkCookies } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const UpdateBlog = ({ work }) => {
    const user = checkCookies('user')
    const router = useRouter()
    useEffect(() => {
        if (!user) {
            router.push('/') //Have to do this cause I have to use getStaticProps instead of getServerSideProps
        }
    }, [router, user])

    const defaultState = {
        stack: work.stack,
        platform: work.platform,
        featured: false,
        website: work.website,
        title: work.title,
        date: work.date,
        image: undefined,
        content: work.content,
        featuredTech: work.featuredTech,
        repository: work?.repository
    }

    return (
        <CreateUpdate 
            state={defaultState} 
            title={'Update Work'} 
            defaultStack={work.stack}
            defaultPlatform={work.platform}
            defaultFeatured={work.featured}
            defaultTech={work.featuredTech}
            image={work.imagePath}
            id={work.id}
            />
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
    }
}

export default UpdateBlog