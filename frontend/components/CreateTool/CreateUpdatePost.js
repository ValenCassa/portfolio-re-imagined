import { BluredContainer } from "../Layout/Containers";
import Layout from "../Layout/Common";
import Dropzone from "./resources/Dropzone";
import GroupData from "./resources/GroupData";
import InputField from "./resources/InputField";
import TextArea from "./resources/TextArea";
import Preview from "./resources/Preview";
import { SpinnerDotted } from "spinners-react";
import { useEffect, useState } from "react";
import DateSelector from "./resources/DateSelector";
import SubmitButton from "./resources/SubmitButton";
import styles from '../../styles/CreateUpdatePost.module.css'
import Post from "../Layout/Post";
import services from '../../services/works'

const CreateUpdatePost = ({ state, title, image, id}) => {
    const [file, setFile] = useState(image ? image: undefined)
    const [submitted, setSubmitted] = useState(false)
    const [date, setDate] = useState(new Date())
    const [message, setMessage] = useState('')
    const [data, setData] = useState(state)


    useEffect(() => {
        return () => {}
    }, [])

    const enabledButton = data.title !== '' && data.content !== '' && data.date !== 'Select a date' && data.type !== ''
    
    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        Object.keys(data).forEach(key => formData.append(key, data[key]))

        setSubmitted(true)

        try {
            if(String(title) === 'Create Post') {
                await services.create({ data: formData, type: 'blogs' })
            } else {
                await services.updateOne({ data: formData, id, type: 'blogs' })
            }

            setSubmitted(false)
            if(String(title) === 'Create Post') {
                setData(state)
                setFile(undefined)
            }
            setMessage(`Post ${String(title) === 'Create Post' ? 'created': 'updated'} successfully`)
            
            setTimeout(() => {
                setMessage('')
            }, 4000)
        } catch (error) {
            setMessage('Error while posting post')
            setTimeout(() => {
                setMessage('')
            }, 4000)
            console.log(error)
        }  
    
    }




    return (
        <Layout title={title}>
            <BluredContainer>
                <h3 className="sectionTitle">{title}</h3>
                <form onSubmit={onSubmit}>
                    <div>
                    <Dropzone file={file} setData={setData} setFile={setFile} data={data}/>
                    <GroupData 
                        leftItem={<InputField title={'Type'} value={data.type} onChange={(e) => setData({ ...data, type: e.target.value.toUpperCase() })}/>}
                        rightItem={<DateSelector setDate={setDate} setData={setData} data={data} date={date} formatedDate={data.date} />}
                    />
                    <InputField title={'Title'} value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })}/>
                    <TextArea value={data.content} onChange={(e) => setData({ ...data, content: e.target.value })} setInput={setData} />
                    <SubmitButton condition={enabledButton} title={title} submitted={submitted} />
                    </div>
                </form>
                {message !== '' && <p className={styles.message}>{message}</p>}
            </BluredContainer>
            <Preview>
                <Post previous={'Dashboard'} previousLink={'/admin/dashboard'} value={data.content} file={file} date={data.date} type={data.type} title={data.title}/>
            </Preview>
        </Layout>
        
    )
}

export default CreateUpdatePost