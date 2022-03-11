import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import Layout from './Common'
import { HeroContainer } from './Containers'

const Main = ({ children }) => {
    return (
        <main className='mainSection'>
            <Navbar />
            <HeroContainer className='layoutBox'>
                <Layout>
                    <HeroSection />
                </Layout>
                { children }
            </HeroContainer>
        </main>
    )
}

export default Main
