import React, {Component} from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Snabblänkar</h5>
            <a href="#">something</a>
            <a href="#">something</a>
            <a href="#">something</a>
            <a href="#">something</a>
            <a href="#">something</a>
            <a href="#">something</a>
          </div>
          <div className="col-md-4 footer-mid">
            <h5>Kontakta Asklundamontessori</h5>
            <p className="contact-header"><b>Telefon:</b></p>
            <p>040-42 88 01</p>
            <p className="contact-header"><b>E-postadress:</b></p>
            <p>maria@asklundamontessori.se</p>
            <p className="contact-header"><b>Besöksadress:</b></p>
            <p>Norra Leden 1</p>
            <p className="contact-header"><b>Postadress:</b></p>
            <p>235 81 Vellinge</p>
          </div>
          <div className="col-md-4">
            <h5>Följ Oss</h5>
            <div className="social">
              <a className="btn btn-social btn-facebook" href="https://www.facebook.com/asklundamontessori/?ref=br_rs">
                <span className="fa fa-facebook-square"></span>
              </a>
              <a href="https://www.facebook.com/asklundamontessori/?ref=br_rs">Facebook</a>
            </div>
            <div className="social">
              <a className="btn btn-social btn-instagram" href="https://www.instagram.com/asklunda_montessoriforskola/">
                <span className="fa fa-instagram"></span>
              </a>
              <a href="https://www.instagram.com/asklunda_montessoriforskola/">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright" className="container-fluid">
        <div className="row justify-content-center">
          <p>© 2020 Asklunda Montessori Förskola, all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
