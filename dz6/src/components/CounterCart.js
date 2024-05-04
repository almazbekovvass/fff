import React from 'react';
import {useSelector} from "react-redux";

const CounterCart = () => {
    const {value} = useSelector(state => state.goods)
    return (
        <div>
            <h1>
                {value}
            </h1>
        </div>
    );
};

export default CounterCart;