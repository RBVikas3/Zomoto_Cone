import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, background: "white", borderRadius: "50%", display: "flex", justifyItems: "center", alignItems: "center", padding: "4px" }}
            onClick={onClick}>nextArrow</div>
    )
}

export default PrevArrow