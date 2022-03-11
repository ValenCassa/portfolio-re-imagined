import { fetchTwitter } from "../../../services/twitter";
import { AiOutlineTwitter } from 'react-icons/ai'
import { useEffect, useState } from "react";

const TwitterCard = () => {
    const [twitter, setTwitter] = useState({})

    useEffect(() => {
        async function fetchData() {
            const twitterData = await fetchTwitter()

            setTwitter(twitterData)
        }

        fetchData()
    }, [])

    return (
        <div className="cardBody">
            <div className="cardHeader">
                <div className="cardHeaderLeft">
                    <div className="avatarBorder">
                        <div className="avatarTwitter"/>
                    </div>

                    <div className="cardHeaderText">
                        <p className="username cardText">ValenCassa</p>
                        <p className="userlink cardText">@devcassa</p>
                    </div>
                </div>
                
                <a href="https://twitter.com/devcassa" target='_blank' rel="noreferrer">
                    <button className="followButton">Follow</button>
                </a>
            </div>

            <p className="cardDescription cardText">
                Full-stack developer. Love making and designing things  🎉
            </p>

            <div className="cardFooter">
                <div>
                    <p className="twitterInfo cardText">
                        {twitter.following}<span>Following</span>
                    </p>
                </div>

                <div>
                    <p className="twitterInfo cardText">
                        {twitter.followers}<span>Followers</span>
                    </p>
                </div>
                <div className="twitterIcon">
                    <AiOutlineTwitter color="#1d9bf0" size={20}/>
                </div>
                
            </div>
        </div>
    )
}

export default TwitterCard