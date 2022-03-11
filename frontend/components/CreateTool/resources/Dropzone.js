import { default as Drop } from 'react-dropzone'
import styles from '../../../styles/Dropzone.module.css'
import { BsImage } from 'react-icons/bs'

const Dropzone = ({ file, setFile, setData, data }) => {

    const onDrop = (files) => {
        setFile(URL.createObjectURL(files[0]))
        setData({...data, image: files[0]})
    }

    return (
        <>
        <div>
            <h4 className={styles.upload}>Upload portrait</h4>
        </div>
        <Drop 
        onDrop={(files) => onDrop(files)} 
        maxFiles={1}
        >
            {({ getRootProps, getInputProps }) => (
                <div>
                    <section className={styles.dropzone} style={file && { backgroundImage: `url(${file})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div {...getRootProps()} className={styles.drop}>
                            <input {...getInputProps()} name='image' />
                            <div className={styles.dropContent} id={file ? styles.uploadedImage: undefined}>
                                <BsImage size={50} />
                                <p>Drop an image here</p>
                            </div>
                        </div>
                    </section>
                    {file &&
                    <>
                    <p className={styles.success}>Succesfully uploaded image</p>
                    </>
                    }
                </div>
            )}    
        </Drop>
    </>
    )
}

export default Dropzone