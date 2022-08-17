import React from 'react'
import './home.css'
import Card from './Card.js'
import Api from './api.json'
export default function Home() {

    let articles = Api

    function search() {
        let location = document.getElementById('location').value
        let price = document.getElementById('price').value
        let area = document.getElementById('area').value
        let a = 0


        document.getElementById('main').innerHTML = ''

        articles.map((e) => {

            let ele = document.createElement('p')
            ele.className = 'col-md-9 ml-[70px] my-4'

            ele.innerHTML = `<div class="card">
                <img src=${require('./' + e.img + '.jpg')} class="card-img-top"/>
                <div class="card-body">
                  <h1 class="card-title">Rs : ${price}/month</h1>
                  <p class="card-text">${location}</p>
                  <p class="card-text">Area: ${area} square yard</p>
                  <p class="card-text">Rooms:${e.room}</p>
                  </div>
                  </div>`
            if (e.location == location && e.price == price && e.area == area) {
                document.getElementById("main").appendChild(ele)
                a++
            }
        })

        if (a == 0) {
            document.getElementById("main").innerHTML = `<div class="ml-[50vw] mt-[4rem]"> No Match </div>`
        }



    }

    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-gray-300">
                <div class="container-fluid">
                    <p class="name text-blue-700  text-4xl ml-[40vw]">Rent a Property</p>
                </div>
            </nav>

            <div class="mt-[5rem] ml-[40vw] width-[5rem]">

                <p class="name text-black-700 text-[2rem]" >Search for a rent house :</p>

            </div>

            <div className='d-flex allFilters'>

                <div className='filter'>
                    <p>Location</p>

                    <select id='location'>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kerela">Kerela</option>
                    </select>
                </div>
                <div className='filter'>
                    <p>When</p>

                    <select id='when'>
                        <option value="h1">1 month</option>
                        <option value="gs430">6 month</option>
                        <option value="other">1 year</option>
                        <option value="other">more than 1 year</option>
                    </select>
                </div>
                <div className='filter'>
                    <p>Price</p>

                    <select id='price'>
                        <option value="5000">5000</option>
                        <option value="7000">7000</option>
                        <option value="10000">10000</option>

                    </select>
                </div>
                <div className='filter'>
                    <p>Area(Sq. Yard)</p>

                    <select id="area">
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>

                    </select>
                </div>

                <div>
                    <button type="button" onClick={search} class="filter btn btn-outline-light">Search</button>
                </div>

            </div>



            <main className='main' id='main'>
                {articles.map((e) => {



                    return <div className='col-md-9 ml-[70px] my-4'>
                        <Card price={e.price} img={require(`./${e.img}.jpg`)} location={e.location} area={e.area} room={e.room} />




                    </div>


                })}


            </main>

        </div>
    )
}
