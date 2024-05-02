import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {

    const {counter} = useSelector(state => state.goods)

    return (
        <div style={{backgroundColor:'red', width:'15px'}}>
            {
                counter
            }
        </div>
    );
};

export default Counter;