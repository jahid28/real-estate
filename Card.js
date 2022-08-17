import React from 'react'
import './card.css'
export default function Card(props) {
    return (
        <div className='wholeCard'>

<div class="card">
  <img src={props.img} class="card-img-top"/>
  <div class="card-body">
    <h1 class="card-title">Rs : {props.price}/month</h1>
    <p class="card-text">{props.location}</p>
    <p class="card-text">Area: {props.area} square yard</p>
    <p class="card-text">Rooms:{props.room}</p>
  </div>
</div>





        </div>
    )
}
