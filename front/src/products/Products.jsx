import "../App.css"
import { UselanguageContext } from "../languageContext"
import { SingleProduct } from "./SIngleProduct"
export const Products = () => {
    const { data } = UselanguageContext()
    return (
        <div style={styles.container}>
            <div style={styles.subcontainer}>
                <div className="grid">
                    {data && data.map((el, i) => {
                        return <SingleProduct key={i} el={el} />
                    })}
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        height: 'auto', paddingTop: '100px', paddingBottom: '70px'
    },
    subcontainer: {
        width: '90vw', height: "auto", margin: '0 auto'
    }
}