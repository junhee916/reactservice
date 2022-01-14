import React, { useState } from 'react'
import shoesData from './data'
import axios from 'axios'
import './css/Main.css'

function Main() {
    let [shoes, changeShoes] = useState(shoesData)
    let [modal, changeModal] = useState(true)
    let [like, changeLike] = useState([0,0,0])
    return (
        <div>
            {
                shoes.map((rstShoes, i) => {
                    return <Card shoes={rstShoes} like={like} changeLike={changeLike} num={i} key={i}/>
                })
            }
            <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then(data => {
                        console.log('get shoes data 확인: ', data["data"])
                        let shoesData = data["data"]
                        let newArray = [...shoes, ...shoesData]
                        console.log('shoes data array 확인: ', newArray)
                        changeShoes(newArray)
                    })
                    .catch()
            }}>더보기</button>
            {
                modal == true ?
                    <OpenModal changeModal={changeModal} /> : <CloseModal changeModal={changeModal} />
            }

        </div>
    );
}
function Card(props) {
    return (
        <div>
            <img src={'https://codingapple1.github.io/shop/shoes' + (Number(props.shoes["id"]) + 1) + '.jpg'}></img>
            <div className='main_row_title_like'>
                <h1 className='main_move_detail' onClick={() => { window.location.href = "/detail/" + props.shoes["id"] }}>{props.shoes["title"]}</h1>
                <div className='main_row_like'>
                    <div onClick={() => {
                        alert("좋아요를 눌렀습니다.")
                        let newArray = [...props.like]
                        newArray[props.num] = props.like[props.num] + 1
                        props.changeLike(newArray)
                    }}>❤</div>
                    <div className='main_like_color'>{props.like[props.num]}</div>
                </div>
            </div>
            <div>{props.shoes["content"]}</div>
            <div>{props.shoes["price"]}</div>
        </div>
    )
}

function OpenModal(props) {
    return (
        <div>
            <h1>open Modal</h1>
            <button onClick={() => { props.changeModal(false) }}>닫기</button>
        </div>
    )
}

function CloseModal(props) {
    return (
        <div>
            <h1>close Modal</h1>
            <button onClick={() => { props.changeModal(true) }}>열기</button>
        </div>
    )
}

export default Main;