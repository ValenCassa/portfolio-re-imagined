import { BluredContainer } from "../Layout/Containers"
import Layout from "../Layout/Common"
import Dropzone from './resources/Dropzone'
import styles from '../../styles/Work.module.css'
import MultiSelect from './resources/MultiSelect'
import { useEffect, useState } from "react"
import DateSelector from './resources/DateSelector'
import GroupData from './resources/GroupData'
import Select from './resources/Select'
import InputField from './resources/InputField'
import TextArea from './resources/TextArea'
import Preview from './resources/Preview'
import Work from '../Layout/Work'
import services from '../../services/works'
import { stackOptions, platformOptions, featuredOption, featuredTechOption } from '../utils/options' 
import SubmitButton from "./resources/SubmitButton"

const CreateUpdate = ({ state, title, defaultStack, defaultPlatform, defaultFeatured, defaultTech, image, id }) => {
    const [file, setFile] = useState(image ? image : undefined)
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState('')
    const [date, setDate] = useState(new Date())
    const [data, setData] = useState(state)

    useEffect(() => {
        return () => {}
    }, []) //Cleanup function

    const enabledButton = data.stack !== [] && data.platform !== [] && (data.website !== '' || data.repository !== '') && data.title !== '' && data.date !== 'Select a date' & data.content !== '' && data.featuredTech !== ''

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('stack', JSON.stringify(data.stack))
        formData.append('platform', JSON.stringify(data.platform))
        Object.keys(data).forEach(key => key !== 'stack' && key !== 'platform' && formData.append(key, data[key]))
        
        setSubmitted(true)
        try {
            if (String(title) === 'Create Work') {
                await services.create({data: formData, type: 'works'})
            } else {
                await services.updateOne({data: formData, id, type: 'works'})
            }

            setSubmitted(false)
            if (String(title) === 'Create Work') {
                setData(state)
                setFile(undefined)
            }
            setMessage(`Work ${String(title) === 'Create Work' ? 'created': 'updated'} successfully`)

            setTimeout(() => {
                setMessage('')
            }, 4000)
        } catch(error) {
            setMessage('Error while posting work')
            setTimeout(() => {
                setMessage('')
            }, 4000)

            console.log(error)
        } 
    }

    return (
        <Layout title={title}>
            <BluredContainer>
                <h3 className="sectionTitle">{title}<span>.</span></h3>
                <form onSubmit={onSubmit}>
                    <div className={styles.data}>
                        <Dropzone file={file} setData={setData} setFile={setFile} data={data}/>
                        <GroupData 
                        leftItem={ <MultiSelect defaultValue={defaultStack} options={stackOptions} title='Stack' setState={(value, e) => setData({...data, stack: value.map(v => v.value)})}/> }
                        rightItem={ <DateSelector setDate={setDate} setData={setData} data={data} date={date} formatedDate={data.date}/> }
                        />
                        <GroupData 
                        leftItem={ <MultiSelect defaultValue={defaultPlatform} options={platformOptions} title='Platform' setState={(value, e) => setData({ ...data, platform: value.map(v => v.value) })}/> }
                        rightItem={ <Select defaultValue={defaultFeatured} title={'Featured'} options={featuredOption} onChange={(value, e) => setData({ ...data, featured: value.value })}/> }
                        />
                        <GroupData 
                        leftItem={<InputField title='Website' value={data.website} onChange={(e) => setData({ ...data, website: e.target.value })}/>}
                        rightItem={ <Select defaultValue={defaultTech} title={'Featured Tech'} options={featuredTechOption} onChange={(value, e) => setData({ ...data, featuredTech: value.value })} /> }
                        />

                        <InputField title='Repository' value={data.repository} onChange={(e) => setData({ ...data, repository: e.target.value })}/>
                        <InputField title='Title' value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })}/>

                    </div>
                    <TextArea value={data.content} onChange={(e) => setData({...data, content: e.target.value})} setInput={setData}/>
                    <SubmitButton condition={enabledButton} title={title} submitted={submitted}/>
                </form>
                {message !== '' && <p className={styles.message}>{message}</p>}
            </BluredContainer>

            <Preview>
                <Work previous={'Dashboard'} previousLink={'/admin/dashboard'} repository={data.repository} title={data.title} date={data.date} value={data.content} file={file} platform={data.platform} stack={ data.stack } website={data.website}/>
            </Preview>

        </Layout>
    )
}

export default CreateUpdate