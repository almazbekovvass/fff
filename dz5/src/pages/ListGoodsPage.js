import {useDispatch, useSelector} from "react-redux";
import { increaseCounter} from "../store/goodsSlice";
import {addProducts} from "../store/cartSlice";


const ListGoodsPage = () => {
    const dispatch = useDispatch()
    const {product}= useSelector(state =>state.goods)
    const addProduct=(el) =>{
        dispatch(increaseCounter())
        dispatch(addProducts(el))
    }
    return (
        <div>
            {
                product.map(el =>[
                    <>
                        <div>{el.name}</div>
                        <button onClick={() => addProduct(el)}>Купить</button>
                    </>
                ])
            }
        </div>
    );
};

export default ListGoodsPage;