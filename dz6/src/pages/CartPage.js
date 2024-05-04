import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBusket, decrement, increment, removeBusketProduct} from "../store/goodsSlice";


const CartPage = () => {
    const dispatch= useDispatch()
    const product= useSelector(state => state.goods.buskets)

    const addBuseketProduct = (product) => {
        dispatch(addBusket(product))
        dispatch(increment(1))
    }
    const removeProduct=(prod) =>{
        dispatch(removeBusketProduct(prod))
    }

    console.log(product)
    return (
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
            {
                product?(
                    product.map((item) => (
                        <div style={{width:'220px', display:'flex', flexDirection:'column', border:'3px solid black'}} key={item.id}>
                            <img style={{width:'200px'}} src={item.images[0]} alt=""/>
                            <span>{item.title}</span>
                            <button onClick={() =>{removeProduct(item)}}>-</button>
                            <span>{item.count}</span>
                            <button onClick={() => addBuseketProduct(item)}>+</button>
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

export default CartPage;