import React from 'react'

const InternalStyles = () => {

    const styles = {
        backgroundColor: "red",
        color: "white",
        border: "5px solid white",
        height: "100%",
        width: "100%",
        fontSize: "larger",
        padding: "2rem 4rem",
        borderRadius: "10px",
        cursor: "pointer"
    }

  return (
    <div>
        <button style={styles}>Cancel</button>
    </div>
  )
}

export default InternalStyles