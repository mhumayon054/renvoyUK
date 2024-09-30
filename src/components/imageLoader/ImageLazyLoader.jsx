import React, { useState } from 'react'

const ImageLazyLoader = ({ src }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div style={{height:"100%"}}>
            {loaded ? null : (
                <img style={{ height: "100%", width: "100%", resize: "stretch" }} src={require("../../images/palceholder1.webp")} />
            )}
            <img
                style={loaded ? {} : { display: 'none', }}
                src={src}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}

export default ImageLazyLoader