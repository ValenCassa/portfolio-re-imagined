import { HeroContainer } from "../Layout/Containers"
import HeroBackground from "./resources/background"
import InputMessage from "./resources/FastMessage"
import GithubIcon from "./resources/GithubIcon"
import LinkedinIcon from "./resources/LinkedinIcon"
import TwitterCard from "./resources/TwitterCard"

const TextHero = ({ children }) => {
    return (
        <p className="textHero">{ children }</p>
    )
}

const RedDot = () => (
    <span className="redDot">.</span>
)

const Divider = () => {
    return (
        <div className="divider"/>
    )
}

const HeroSection = () => {
    return (
        <div className="heroSection">
            <HeroBackground />
            <div className="heroWrapper">
                <HeroContainer id='heroRoot'>
                    <div className="boxHero">
                        <TextHero>Hello<RedDot /></TextHero>
                        <Divider />
                        <TextHero>I&apos;m Valen<RedDot /></TextHero>
                        <Divider />
                        <p className="description">I&apos;m a full stack developer based in Argentina!</p>
                    </div>
                    <div className="heroRight">
                        <GithubIcon />
                        <InputMessage />
                        <TwitterCard />
                        <LinkedinIcon />
                    </div>
                </HeroContainer>
            </div>
        </div>
    )
}

export default HeroSection