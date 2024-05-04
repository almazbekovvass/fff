import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBusket, fetchGoods, increment} from "../store/goodsSlice";

const GoodsPage = () => {
    const product = useSelector(state => state.goods.product)
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(fetchGoods())
    }, []);

    const addBusketProduct = (prod) => {
        dispatch(addBusket(prod))
        dispatch(increment(1))
    }
    return (
        <div style={{display:'flex', gap:'20px', flexWrap:'wrap', marginTop:'20px'}}>
            {
                product.products?(
                    product.products.map((item) => (
                        <div style={{width:'220px', display:'flex', flexDirection:'column', border:'3px solid black'}} key={item.id}>
                            <img style={{width:'200px'}} src={item.images[0]} alt=""/>
                            <span>{item.title}</span>
                            <button onClick={() => addBusketProduct(item)}>buy</button>
                        </div>
                    ))
                ):(
                    <div>
                        <h1>LOADING...</h1>
                    </div>
                )
            }
        </div>
    );
};

export default GoodsPage;