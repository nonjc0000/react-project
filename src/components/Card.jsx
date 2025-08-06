import React from 'react'

const Card = ({ imgURL, title, desc, btnName, btnURL }) => { // 元件的參數=屬性
    // 解構=>把元件的到的參數給props之後，再逐一解構作為屬性使用
    // 元件屬性只能往下傳，不能往上或往外傳
    // const { imgURL, title, desc, btnName, btnURL } = props

    return (
        <div className="card">
            <img src={imgURL} className="card-img-top" alt="blue Gibson" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={btnURL} className="btn">{btnName}</a>
            </div>
        </div>
    )
}

export default Card;