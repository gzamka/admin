import "../App.css"
import { SingleProduct } from "./SIngleProduct"
export const Products = ({ docs }) => {
    return (
        <div style={{height: 'auto', paddingTop: '100px', paddingBottom: '70px' }}>
            <div style={{ width: '90vw', height: "auto", margin: '0 auto' }}>
                <div className="grid">
                    {docs && docs.map((el, i) => {
                        return <SingleProduct key={i} el={el} />
                    })}
                </div>
            </div>
        </div>
    )
}