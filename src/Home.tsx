import {useEffect, useState} from 'react';
import './App.css';
import ListadoPeliculas from './Peliculas/ListadoPeliculas';
//import PeliculaIndividual from './Peliculas/PeliculaIndividual';
import { landingPageDTO } from './Peliculas/peliculas.model';
//import Button from './Utils/Button';

function Home() {

  const [peliculas,setPeliculas]=useState <landingPageDTO>({});

  useEffect(()=>{
    const timerId = setTimeout(()=>{
      setPeliculas({
        enCartelera:[
        {
          id:1,
          titulo:'spidermarn',
          poster:'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/216033/spider-man-far-from-home-SFFH_OnLine_1SHT_6072x9000_TSR_04_rgb.jpg'
        },
        {
          id:2,
          titulo:'moana',
          poster:'https://cdn.shopify.com/s/files/1/2533/3248/products/00873Moana_Blackstone__Rounded_900x_38e8023b-7362-4809-adcc-af6f10bc2c62_700x.png?v=1633520171'
        }
      ],
    proximosEstrenos:[
      {
        id:3,
        titulo:'soul',
        poster:'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0%2C0%2C648%2C972'
      }
    ]
  })
    },500)
    return ()=>clearTimeout(timerId)
  },[])

  // const peliculasEnCartelera: pelicula[]=[
  //   {
  //     id:1,
  //     titulo:'spidermarn',
  //     poster:'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/216033/spider-man-far-from-home-SFFH_OnLine_1SHT_6072x9000_TSR_04_rgb.jpg'
  //   },
  //   {
  //     id:2,
  //     titulo:'moana',
  //     poster:'https://cdn.shopify.com/s/files/1/2533/3248/products/00873Moana_Blackstone__Rounded_900x_38e8023b-7362-4809-adcc-af6f10bc2c62_700x.png?v=1633520171'
  //   }
  // ]

  // const peliculasProximosEstrenos: pelicula[]=[
  //   {
  //     id:3,
  //     titulo:'soul',
  //     poster:'https://lumiere-a.akamaihd.net/v1/images/image_5e27f8d3.jpeg?region=0%2C0%2C648%2C972'
  //   }
  // ]
  // const peliculaTest: pelicula = {
  //   id:1,
  //   titulo:'spidermarn',
  //   poster:'https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/216033/spider-man-far-from-home-SFFH_OnLine_1SHT_6072x9000_TSR_04_rgb.jpg'
  // }
  return (

  <>
  <h3>En Cartelera</h3>
  <ListadoPeliculas peliculas={peliculas.enCartelera}/>

  <h3>Proximos  Estrenos</h3>
  <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
  </>


  );
}

export default Home;
