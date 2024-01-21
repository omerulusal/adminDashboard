import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"


const Product = () => {
    return (
        <div className="product">
            <Single key={singleProduct.id} {...singleProduct} />
        </div>
    )
}
// Single Componentine data.ts te oluşturdugum verileri yolladım.
export default Product