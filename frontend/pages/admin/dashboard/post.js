import { checkCookies } from "cookies-next"
import CreateUpdatePost from "../../../components/CreateTool/CreateUpdatePost"

const CreatePost = () => {
    const dataPlaceholder = {
        title: '',
        content: '',
        date: 'Select a Date',
        type: '',
        image: null,
    }

    return (
        <CreateUpdatePost state={dataPlaceholder} title={'Create Post'} />
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

export default CreatePost