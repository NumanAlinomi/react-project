import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function MyState() {
  const [items, setItems] = useState([]);
  
useEffect(()=>{
  const data = localStorage.getItem("articles");
  if(data){
    setItems(JSON.parse(data));
  }else {
  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=cdd5674176374d83af715b70e1d9c693")
      .then((res) => {
        localStorage.setItem("articles",JSON.stringify(res.data.articles));
        setItems(res.data.articles);
      })
      .catch((error) => {
        console.log(error,"this is error");
      });
    }
},[])
  return (
    
    <div >

    <div className='card-container'>
      {items.map((item) => (
        <div className="card"  key={item.title}>
          <img src={item.urlToImage} style={{width: "15rem" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.description}</p>
            <h5>{item.publishedAt}</h5>
            <a href={item.url} className="btn btn-primary">
              detail
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MyState;
