import React from 'react';
import './CarCardS.css';
import CarPhoto from '../../assets/img/jpg/audi1.webp';

let Car={
  brand:'Audi',
  model:'A8',
  year:2022,
  condition:'Nuevo',
  km:0,
  engine:'3.2',
  color:'Gris',
  category:'Deportivo',
  fuel:'Nafta',
  transmission:'Manual',
  doors:2,
  airbags:4
}
let{brand, model,year,condition,km,engine,color,category,fuel,transmission,doors,airbags}=Car;

function CarCardS(){
  return (
    <div className='CarCardS'>
      <div className="CarCardS__top">
        <div className="CarCardS__photo">
          <img src={CarPhoto} alt="" className="CarCardS__img" />
        </div>
        <div className="CarCardS__header">
          <p className="CarCardS__pTitle">Último Coche</p>
          <p className="CarCardS__pName">{brand} {model}</p>
          <p className="CarCardS__pText">Año: {year}</p>
          <p className="CarCardS__pText">Condición: {condition}</p>
        </div>
      </div>
      <div className="CarCardS__btm">
        <div className="CarCardS__left">
          <p className="CarCardS__pData"><span className="CarCardS__sData">Kms: </span>
            {km}
          </p>
          <p className="CarCardS__pData"><span className="CarCardS__sData">Motor: </span>
            {engine}
          </p>
          <p className="CarCardS__pData"><span className="CarCardS__sData">Color: </span>
          {color}
          </p>
          <p className="CarCardS__pData"><span className="CarCardS__sData">Categoria: </span>
          {category}
          </p>
        </div>
        <div className="CarCardS__right">
          <p className="CarCardS__pData"><span className="CarCardS__sData">Combustible: </span>
            {fuel}
          </p>
          <p className="CarCardS__pData"><span className="CarCardS__sData">Transmisión: </span>
            {transmission}
          </p>
          <p className="CarCardS__pData"><span className="CarCardS__sData">Puertas: </span>
          {doors}
          </p>
          <p className="CarCardS__pData"><span className="CarCardS__sData">Airbags: </span>
          {airbags}
          </p>
        </div>
      </div>
    </div>
  )
}
export default CarCardS;