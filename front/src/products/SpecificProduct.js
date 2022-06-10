import { useParams } from 'react-router-dom'
import { UselanguageContext } from '../languageContext'
import { ProductDetail } from './ProductDetail'
export const SpecificProduct = () => {
    let { slug } = useParams()
    const { data } = UselanguageContext()
    return (<>
        {data.filter((el) => el.id === slug).map((element, i) => {
            return <ProductDetail key={i} el={element} docs={data} />
        })}
    </>)
}