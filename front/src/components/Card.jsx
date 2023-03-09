import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faLocationDot,faWifi,faPersonSwimming,faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Cards.css"
import React from 'react'
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
    
      <section className="container-card">
        <div  className="container-img" style={{backgroundImage:`url(${props.url})`, backgroundSize:"cover", backgroundPosition:"center"}}>
          <FontAwesomeIcon className="icon-heart" icon={faHeart} />
          {/* <img
            className="container-img"
            src={props.url}
          /> */}
        </div>
        <div className="container-detail">
          <div className="card-head c">
            <div className="name-hotel">
              <span className="starts">{props.category}</span>
              <FontAwesomeIcon className="icon-star" icon={faStar} />
              <h1 className="title">{props.title}</h1>
            </div>
            <div className="ranking-card c">
              <button className="calification-card">9</button>
              <span className="medition-card">Muy bueno </span>
            </div>
          </div>
          <div className="location-card c">
            <FontAwesomeIcon className="icon-location" icon={faLocationDot}/>
            <p className="description-location">{props.location} </p>
            <a className="location-mapa" href=" ">MOSTRAR EN EL MAPA</a>
          </div>
          <div className="icons-locations c">
          <FontAwesomeIcon className="icon-wifi" icon={faWifi}/>
          <FontAwesomeIcon className="icon-Swimming" icon={faPersonSwimming}/>
          </div>
          <div className="description-card c">
            <p>
            {props.description} 
            </p>
          </div>
            <button className="button-card c">ver mas </button>
        </div>
      </section>
    </Link>
  );
};
export default Card;
