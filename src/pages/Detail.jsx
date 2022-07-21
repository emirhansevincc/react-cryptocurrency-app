import React, { useEffect, useState } from 'react'
import './Detail.css'
import axios from "axios";
import { useParams } from 'react-router-dom'

function Detail() {

    const useParam = useParams()
    const url = `https://api.coingecko.com/api/v3/coins/${useParam.Id}`

    const [detail, setDetail] = useState({})

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setDetail(response.data)
                console.log(response.data)
            })
    }, [])

    return (
        <div className='main-container'>
            <div className='top-container'>
                {
                    detail.image ? (<img src={detail.image.large} />) : (<p>IMAGE NOT FOUND</p>)
                }
                <h2 className='name'>{detail.name} ({detail.symbol})</h2>
            </div>

            <div className="price-change">

                <div className="price-change-24h common">
                    <p>24h</p>
                    {detail.market_data ? (<p>{detail.market_data.price_change_percentage_24h.toFixed(2)} %</p>) : (null)}
                </div>

                <div className="price-change-7d common">
                    <p>7d</p>
                    {detail.market_data ? (<p>{detail.market_data.price_change_percentage_7d.toFixed(2)} %</p>) : (null)}
                </div>

                <div className="price-change-30d common">
                    <p>30d</p>
                    {detail.market_data ? (<p>{detail.market_data.price_change_percentage_30d.toFixed(2)} %</p>) : (null)}
                </div>

                <div className="price-change-1y common">
                    <p>1y</p>
                    {detail.market_data ? (<p>{detail.market_data.price_change_percentage_1y.toFixed(2)} %</p>) : (null)}
                </div>

            </div>

            <div className="bottom-container">
                <h3 className='about'>About {detail.name}</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore animi iusto deserunt veritatis ratione perspiciatis non quas dignissimos! Ad, saepe! Itaque iste quibusdam, dicta libero totam modi aliquam repellendus repudiandae voluptas sunt ducimus iusto suscipit, accusantium quos hic quam animi tenetur facilis facere sequi distinctio minima laboriosam! Quisquam, rerum ipsa voluptatibus porro asperiores laudantium totam obcaecati a, cupiditate dolore fugit. Optio, distinctio sit. Maiores facere hic, adipisci cupiditate et nostrum neque a, at ducimus quisquam cum, laborum perspiciatis dolorum voluptas veniam fuga perferendis accusantium odit. Nesciunt quasi saepe optio ad autem neque vel rerum sequi qui dolor iure quam maxime, nemo, incidunt debitis ex similique, aliquid voluptas quo tempora tempore. Modi eos facere eveniet rem, nisi harum omnis odio vitae ducimus. Amet ullam dolore veritatis aliquam dignissimos. Maiores esse quia ea optio aperiam alias recusandae doloremque veniam similique, ipsa, iusto perspiciatis ad placeat delectus quasi illo consectetur. Ut, sequi! Veritatis distinctio ipsa iure nemo beatae magni, illum ipsam nam. Incidunt facilis tempora molestiae vero nemo itaque nulla maxime aliquam hic. Corporis sit magni est pariatur culpa voluptatum illum iure voluptate neque cum sint molestias placeat dignissimos omnis itaque consequuntur, facere recusandae officiis accusamus quasi doloribus amet? Quia dignissimos eaque unde?
                </p>
            </div>
        </div>
    )
}

export default Detail