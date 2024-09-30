import React from 'react'

export default function ErrorMassage({ error, visible, }) {
    if (!error || !visible) {
        return null
    } else {
        return (
            <div>
                <h5
                    // style={[styles.error_text, cstyle]}
                    style={{ color: "#FF9494", fontSize: 11, letterSpacing: 0, marginLeft: "10px", marginTop: "6px" }}
                >{error}</h5>
            </div>
        )
    }
}
