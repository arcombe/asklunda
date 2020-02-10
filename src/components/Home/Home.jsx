import React, {Component} from 'react';
import './Home.css';

var news = ["news 1", "news 2", "news 3"]

export default function Home() {
  return (

    <div className="container">

      <div className="row">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/images/school.jpeg" class="d-block w-75" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h2>Välkommen till Asklundamontessori!</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/images/montessori.jpg" class="d-block w-75" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <p>Här jobbar vi med montessoripedagogik för att barnen är vår framtid och
                det gäller att ha en bra start.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/images/small_group.jpg" class="d-block w-75" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <p>För oss är det barnet som står i centrum och vi jobbar med att ha bra lärare
                i små grupper</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/images/teachers.jpg" class="d-block w-75" alt="..."/>
              <div class="carousel-caption d-none d-md-block">
                <p>Detta är våra lärare</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>

      <div className="row">
        <div className="col-sm-8">
          <h1>Asklunda Montessoriförskolas nya logga</h1>
          <p>Vi är oerhört stolta över vår nya logga som vi arbetat fram under hösten.  Vår vackra ask är hjärtat i vår innergård och nu även avbildad som vår logga.</p>
        </div>
        <div className="col-sm-4">
          <img className="img-fluid" src="/images/logga.jpg" />
        </div>

      </div>
      <div className="row">
        <div className="col-sm-8">
          <h1>Asklundas Nya Förskola Klar Hösten 2019</h1>
          <p>Första etappen av utbyggnaden kommer vara klar 15 oktober 2019.
            Vi öppnar den nybyggda förskolan 21 oktober 2019. Huvudbyggnaden kommer tillfälligt att stängas för totalrenovering.
            <br/>
            Den nya förskolan kommer att öppnas med 8 avdelningar, detta ger oss möjligheten att ta in flera barn. För att försäkra er om en plats, kan anmälan göras redan nu via denna länken.
            <br/>
            Oktober 2019 – Överlämning av kommunen.
            <br/>
          Hösten 2020 öppnas huvudbyggnaden efter en större totalrenovering med ytterligare två nya avdelningar.</p>
        </div>
        <div className="col-sm-4">

        </div>
      </div>
    </div>
  );
}
