import "../App.css"
import { SingleProduct } from "./SIngleProduct"
export const Products = ({ docs }) => {
    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div className="grid">
                    {docs?.map((el, i) => {
                        return <SingleProduct key={i} el={el} />
                    })}
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        height: 'auto', paddingTop: '100px', paddingBottom: '25%', minHeight: '100vh'
    },
    subcontainer: {
        width: '90vw', height: "auto", margin: '0 auto'
    }
}