import styles from '../../styles/PostCard.module.css'
import { useRouter } from 'next/router'
import { BiTrash } from 'react-icons/bi'

/*
const PostCard = ({ post, href }) => {
    const router = useRouter()

    const onClick = (e) => {
        e.preventDefault()

        router.push(href)
    }


    return (
        
        <div className={styles.cardWrapper} style={post.imagePath && { backgroundImage: `url(${post.imagePath})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={onClick}>

                <div className={styles.blur}/>

            
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <div className={styles.image} style={{ backgroundImage: `url(${post.imagePath})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>
                <div className={styles.container}>
                <div className={styles.right}>
                    <div>
                        <p className={styles.date}>{post.date}</p>
                        <p className={styles.type}>{post.type}</p>
                    </div>
                    <div className={styles.title}>{post.title}</div>
                    <button className={styles.knowMore}>Know more</button>
                </div>
                </div>
            </div>
        </div>
    )
} */

const PostCard = ({ post, href, deleteable, onDelete }) => {
    const router = useRouter()

    const onClick = (e) => {
        console.log(e.target['tagName'])
        if(e.target['tagName'] === 'DIV' && deleteable) {
            router.push(href)
        }

        if(deleteable === undefined) {
            router.push(href)
        }
    }

    return (
        <div className={styles.cardWrapper} onClick={onClick}>
            <div style={{ padding: '0 0.2em' }}>
                <div className={styles.deleteable}>
                    <div className={styles.badges}>
                        <span className={styles.badge} id={styles.date}>{ post.date }</span>
                        <span className={styles.badge} id={styles.type} >{ post.type }</span>
                    </div>
                    
                        {deleteable && 
                            <div className={styles.svg} onClick={onDelete} >
                                <BiTrash color='#f14c4c' size={22}/>
                            </div>
                        }
                    
                </div>
                <div className={styles.title}><h2>{ post.title }</h2></div>
                <p className={styles.description}>{post.content.substring(0,45) + '...'}</p>
            </div>
            <div className={styles.image} style={{ backgroundImage: `url(${ post.imagePath })`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
    )
}

export default PostCard