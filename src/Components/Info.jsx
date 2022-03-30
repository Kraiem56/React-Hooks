import React from 'react'
import {useParams } from "react-router-dom";
import './Info.css'

const Info = ({movies}) => {
  console.log(movies)
  const {id}= useParams()
  const item=movies.find(el=>el.id==id)
  
  return (
    <div>
<div id="card_container" movies-offset={2}>
  <div className="pg">
  <img src={movies.posterURL} alt="" />
  </div>
  <div id="card">
    <div className="shine" />
    <div className="text-block">
      <h1>{movies.title} <small>{movies.year}</small></h1>
      <h3>Action | Adventure</h3>
      <p>{movies.description}      </p>
      <button>movies Trailer</button>
      {movies.year}
    </div>
  </div>
</div>


    </div>
  )
}
export default Info