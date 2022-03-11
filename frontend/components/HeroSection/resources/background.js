import Ellipse from '../../../public/img/Ellipse19.svg'
import Ellipse2 from '../../../public/img/Ellipse 12.svg'
import Ellipse4 from '../../../public/img/Ellipse 14.svg'
import Ellipse5 from '../../../public/img/Ellipse 15.svg'
import Ellipse6 from '../../../public/img/Ellipse 16.svg'
import Ellipse7 from '../../../public/img/Ellipse 17.svg'
import Ellipse8 from '../../../public/img/Ellipse 18.svg'
import Ellipse9 from '../../../public/img/Ellipse 19.svg'
import { HeroContainer } from '../../Layout/Containers'

const HeroBackground = () => {
    return (
        <HeroContainer id='background'>
            <div className='heroBgDiv' id='one'>
                <Ellipse />
            </div>
            <div className='heroBgDiv' id='two'>
                <Ellipse2 />
            </div>
            <div className='heroBgDiv' id='three'>
                <Ellipse4 />
            </div>
            <div className='heroBgDiv' id='four'>
                <Ellipse5 />
            </div>
            <div className='heroBgDiv' id='five'>
                <Ellipse6 />
            </div>
            <div className='heroBgDiv' id='six'>
                <Ellipse7 />
            </div>
            <div className='heroBgDiv' id='seven'>
                <Ellipse8 />
            </div>
            <div className='heroBgDiv' id='eight'>
                <Ellipse9 />
            </div>
            <div className='heroBgDiv' id='nine'>
                <Ellipse9 />
            </div>
        </HeroContainer>
    )
}

export default HeroBackground