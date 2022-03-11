import { checkCookies } from "cookies-next"
import CreateUpdate from "../../../components/CreateTool/CreateUpdate"

const CreateBlog = () => {
    const dataPlaceholder = {
        stack: [],
        platform: [],
        featured: false,
        website: '',
        title: '',
        date: 'Select a date',
        image: null,
        content: '',
        featuredTech: ''
    }

    return (
        <CreateUpdate state={dataPlaceholder} title={'Create Work'}/>
    )
}

export const getServerSideProps = ({ req, res }) => {
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

    return { props: {} }
}
export default CreateBlog