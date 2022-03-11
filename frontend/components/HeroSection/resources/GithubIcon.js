import { VscGithubAlt } from 'react-icons/vsc'

const GithubIcon = () => (
    <div className='gitIcon'>
        <a href='https://github.com/ValenCassa' target='_blank' rel='noreferrer'>
            <div className='iconBox' id='github'>
                <VscGithubAlt size={40}/>
            </div>
        </a>
    </div>
)

export default GithubIcon