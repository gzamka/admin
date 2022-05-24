

export const Choose = () => {

    return (
        <>
        <h1>Why we choose </h1>
        <div style={styles.container}>

            <div style={styles.icon}>

            </div>
            <div style={styles.text}>
                <h1> Air Transport</h1>
                <p>The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.</p>
            </div>
        </div>
        </>
    )
}

const styles = {
    container: {
        width: "334px",
        height: "400px",
        padding: "85px 22px",
        backgroundColor: "white",
        border: "1px solid #e1ebf7",
        borderRadius: "6px",
        position: "relative"
    },

    icon: {
        height: "50px",
        width: "50px",
        backgroundImage: `url("https://cdn-icons-png.flaticon.com/512/7576/7576801.png")`,
        backgroundColor: '#cccccc'
    },

    text: {
        paddingTop: "50px",
    }
}