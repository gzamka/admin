import { useParams } from 'react-router-dom'
import { ProductDetail } from './ProductDetail'
export const SpecificProduct = ({ docs }) => {
    let { slug } = useParams()
    return (<>
        {docs.filter((el) => el.id === slug).map((element,i) => {
            return <ProductDetail key={i} el={element} docs={docs} />
        })}
    </>)
}