import React, { Component } from 'react';
import './Navbar.css';
import Img from 'react-image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-fixed-top navbar-dark bg-dark ">

      <a href="#">
        <img src="/images/logga.jpg" className="img-responsive logga" />
      </a>

      <div className="container align-self-start brand-container">

        <a className="navbar-brand" href="#">Asklundamontessori</a>
        <p className="brand-text font-italic">
          "Med barnet  i centrum i vår unika miljö, sår vi frön för livet." - Nytänkade Montessoriförskola
        </p>

      </div>


      <a class="btn btn-social btn-facebook" href="https://www.facebook.com/asklundamontessori/?ref=br_rs">
        <span class="fa fa-facebook-square"></span>
      </a>
      <a class="btn btn-social btn-instagram" href="https://www.instagram.com/asklunda_montessoriforskola/">
        <span class="fa fa-instagram"></span>
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="menu" >
        <ul className="navbar-nav sticky-top">
          <div className="container">
            <div className="row justify-content-md-between">
              <div className="col-md-2">
                <a className="nav-link first-link" href="#">Verksamhet</a>
                <a className="nav-link second-link" href="#">Normer och Värden</a>
                <a className="nav-link second-link" href="#">Verksamhetsråd</a>
                <a className="nav-link second-link" href="#">Personal</a>
                <a className="nav-link second-link" href="#">Värdegrund</a>
                <a className="nav-link second-link" href="#">Målsättning</a>
                <a className="nav-link second-link" href="#">Systematiskt Kvalitetsarbete</a>
                <a className="nav-link second-link" href="#">Uppdragsdokument</a>
              </div>
              <div className="col-md-2">
                <a className="nav-link first-link" href="#">Handlingsplan</a>
                <a className="nav-link second-link" href="#">Vård Av Sjukt Barn</a>
                <a className="nav-link second-link" href="#">Likabehandlingsplan</a>
                <a className="nav-link second-link" href="#">Synpunkter och Klagomål</a>
              </div>
              <div className="col-md-2">
                <a className="nav-link first-link" href="#">Kök</a>
                <a className="nav-link second-link" href="#">Handlingsplan för barn med särskild kost</a>
                <a className="nav-link second-link" href="#">Matpolicy</a>
              </div>
              <div className="col-md-2">
                <a className="nav-link first-link" href="#">Om Oss</a>
                <a className="nav-link second-link" href="#">Montessoripedagogik</a>
                <a className="nav-link second-link" href="#">GDPR</a>
                <a className="nav-link second-link" href="#">Våra Avdelningar</a>
                <a className="nav-link second-link" href="#">Köinformation</a>
                <a className="nav-link second-link" href="#">Kontakt</a>
              </div>
              <div className="col-md-2">
                <a className="nav-link first-link" href="#">Blanketter</a>
                <a className="nav-link second-link" href="#">Anmälan av kränkande behandling</a>
                <a className="nav-link second-link" href="#">Anmälningsblankett</a>
                <a className="nav-link second-link" href="#">Anmälningsblankett för synpunkter och klagomål</a>
                <a className="nav-link second-link" href="#">Blankett för barn med särskild kost</a>
                <a className="nav-link second-link" href="#">Uppsägning av plats</a>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>

  );
};
