import React from 'react';
import {useSelector} from "react-redux";

const CardPage = () => {
    const {product}= useSelector(state => state.cart)
    return (
        <ul>

            <li>
                {
                    product.length===0 ?
                        'Список пуст'
                        :
                    product.map(el => [
                        <div style={{display:'flex'}}>
                            <li>{el.name}</li>
                            <div style={{marginLeft:'5px', borderRadius:'50%', width:'10px', backgroundColor:'silver'}}>{el.quantity}</div>
                        </div>
                    ])
                }

            </li>
            
        </ul>
    );
};

export default CardPage;