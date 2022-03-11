export const HeroContainer = ({ children, id }) => {
    return (
        <div className="heroContainer" id={id}>{ children }</div>
    )
}

export const BluredContainer = ({ children }) => {
    return (
        <div className="bluredContainer">{children}</div>
    )
}