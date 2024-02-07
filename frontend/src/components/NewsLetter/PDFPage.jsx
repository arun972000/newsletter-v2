


import { useEffect, useState } from 'react';
import PDFCard from './PDFCard'
import Value from './PDFContent'
import "./scrollbar.css";
import axios from 'axios';
import { Url } from '../../url';

const PDFPage = () => {

    const[data,setData]=useState([])
    
    const scrollContainerStyle = { width: "800px", maxHeight: "700px" };

    const apiCall=async()=>{
        try{
            const res=await axios.get(Url)
            setData(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        apiCall()
    },[])

    const letterCard = data.map(item => (<PDFCard key={item.id} item={item} />))
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Value />
                    </div>
                    <div className="col-md-2">
                        <div className="row justify-content-center">
                            <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
                                {letterCard}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PDFPage