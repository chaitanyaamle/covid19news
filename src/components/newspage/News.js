import React, { useContext } from 'react'
import { NewsContext } from "../../NewsContext"
import  NewsArticle  from "../newspage/NewsArticle"
import Error_Emoji from "./error_emoji.png"
import Header from '../../container/header'
import './style.css'

function News(props) {
    const { data } = useContext(NewsContext)
    console.log(props)
    return (
        <>
            <Header/>
            { data ? <div className="all__news"> { data.articles.map((news) => (
                    <NewsArticle data={news} key={news.url}/>
                )) }</div> : 
                <div className="Error__Code">
                    <h1>RateLimited!!</h1>
                    <img src={Error_Emoji} className="img__error__emoji"/>
                <h1>API fetch LIMIT reach!</h1>
                </div> }
        </>
    );
}

export default News;
