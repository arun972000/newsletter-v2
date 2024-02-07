
import YearSelectorComponent from "./Tabs"
import "./NewsLetter.css"
import { useEffect, useState } from "react"
import { Url } from "../../url.js"
import axios from "axios"
import LetterCard from "./LetterCard.jsx"

const NewsLetter = () => {

    const [data,setData]=useState([])

    const apiCall=async()=>{
        try{
            const res=await axios.get(Url)
            setData(res.data)
        }catch(err){
            console.log(err)
        }
    }
    const Letters = data.map(item => (<LetterCard item={item} key={item.id} />))
    useEffect(()=>{
        apiCall()
    },[])
    console.log(data )
    return (
        <>
            <div className="NewsLetter__bg">
                <div className="container">
                    <YearSelectorComponent />
                    <div className="row">
                        {Letters}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter