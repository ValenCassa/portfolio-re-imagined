const SkillCard = ({ skill, styles, children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.skillsWrapper}>
                <div className={styles.skillsBody}>
                    <div className={styles.skillBox}>
                        {children}
                    </div>
                    <div className={styles.skillName}>
                        <p>{skill}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard