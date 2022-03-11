import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { FiSend } from 'react-icons/fi'

const InputMessage = () => {
    const [message, setMessage] = useState('')
    const [valid, setValid] = useState(30)
    const [success, setSuccess] = useState(false)
    const input = useRef()
    const button = useRef()
    const form = useRef()

    useEffect(() => {
        const inputState = localStorage.getItem('inputDisabled')
        if (inputState === 'true') {
            button.current.setAttribute('disabled', true)
            input.current.setAttribute('disabled', true)

            input.current.setAttribute('placeholder', 'Already sent a message')
        }
    }, [])

    useEffect(() => {
        form.current.addEventListener('invalid', function(e) {
            e.preventDefault()
        }, true)
    }, [])


    const onChange = (e) => {
        e.preventDefault()

        setMessage(e.target.value)

        setValid(30 - e.target.value.length)
    }

    const sendEmail = (event) => {
        event.preventDefault()

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USERID

        emailjs.init(userID)

        emailjs.send(serviceID, templateID, { message })
            .then((result) => {
                localStorage.setItem('inputDisabled', true)
                event.target.value = ''
                setSuccess(true)

                setTimeout(() => {
                    setSuccess(false)
                }, 4000)
            }, error => {
                console.log(error.text)
            }) 
    }

    return (
        <div className='formWrapper'>
            <form onSubmit={sendEmail} ref={form}>
                <label>Fast Message<span className='characteres'>Characteres: {valid}</span></label>
                <div className='inputGroup'>
                    <input ref={input} maxLength={30} minLength={8} value={message} onChange={onChange} className='inputMessage' type='message' placeholder='Your message...'/>
                    <button className='submitButton' type='submit' ref={button}>
                        <FiSend size={15}/>
                    </button>
                </div>

                {success && <p className='success'>Message sent succesfully</p>}
            </form>
        </div>
    )
}

export default InputMessage