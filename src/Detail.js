import React, { useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import './css/Detail.scss'
function Detail(props) {
    let { id } = useParams()
    let history = useHistory()
    let resultShoes = props.shoes.find((rstShoes) => {
        return rstShoes["id"] == id
    })
    let [amount, changeAmount] = useState([50, 50, 50])
    return (
        <div>
            <container>
                <div className="my-alert_red">
                    <p>재고가 얼마 남지 않았습니다</p>
                </div>
                <img src={'https://codingapple1.github.io/shop/shoes' + (Number(id) + 1) + '.jpg'}></img>
                <h1 className="red">{resultShoes["title"]}</h1>
                <h4>{resultShoes["content"]}</h4>
                <p>{resultShoes["price"]}</p>
                <button onClick={() => {
                    alert("이전단계로 이동하겠습니다.")
                    history.goBack()
                }}>이전</button>
                <button onClick={() => {
                    alert("장바구니로 이동하겠습니다.")
                    props.dispatch({type:'항목추가', payload:{id:3, name: '새로운상품', quan: 1}})
                    history.push('/cart')
                }}>주문하기</button>
                <div>
                    <h2>{amount[id]}</h2>
                    <button onClick={() => {
                        alert("재고가 증가했습니다.")
                        let newArray = [...amount]
                        newArray[id] = amount[id] + 1
                        changeAmount(newArray)
                    }}>+</button>
                    <button onClick={() => {
                        alert("재고가 감소했습니다.")
                        let newArray = [...amount]
                        newArray[id] = amount[id] - 1
                        changeAmount(newArray)
                    }}>-</button>
                </div>
            </container>
        </div>
    )
}
function changePropsState(state){
    return{
        state : state
    }
}
export default connect(changePropsState)(Detail)