import React from "react";
import { connect } from 'react-redux'
import './css/Cart.css'
function Cart(props) {
    return (
        <div>
            {
                props.state.map(rstState => {
                    return(
                        <div className="cart_table_row">
                            <h1>{rstState["id"]}</h1>
                            <h1>{rstState["name"]}</h1>
                            <h1>{rstState["quan"]}</h1>
                            <div>
                                <button onClick={() => {props.dispatch({type:'수량증가', payload:{num : rstState["id"]}})}}>+</button>
                                <button onClick={() => {props.dispatch({type:'수량감소', payload:{num : rstState["id"]}})}}>-</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function changePropsstate(state) {
    console.log('state data 확인: ', state)
    return {
        state : state
    }
}
export default connect(changePropsstate)(Cart)