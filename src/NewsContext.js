import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data,setData] = useState()
    const apiKey = "API_KEY";

    useEffect(() => {
        axios.get(
            `https://newsapi.org/v2/everything?q=coronavirus+lockdown+covid+vaccine&apiKey=${apiey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    },[data]);

    return(
        <NewsContext.Provider value={{ data }}>
            {props.children}
        </NewsContext.Provider>
    );
}