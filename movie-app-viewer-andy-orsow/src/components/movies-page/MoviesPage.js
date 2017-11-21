import React from 'react';
import { Link } from 'react-router-dom'
import './MoviesPage.css';
import X from '../../statics/menu-close-x.png';
import arrival from '../../statics/arrival.jpg';
import avengers from '../../statics/avengers.jpg';
import darknight from '../../statics/darknight.jpg';
import divergent from '../../statics/divergent.jpeg';
import guardians from '../../statics/guardians.jpg';
import mockingjay from '../../statics/mockingjay.jpg';
import oblivian from '../../statics/oblivian.jpg';
import pirates from '../../statics/pirates.jpg';
import thor from '../../statics/thor.jpeg';
import sherlock from '../../statics/sherlock.jpg';

export default () => (
  <div className="Movies">
    <div className="Movies-header">
      <h1>
        Movies
      </h1>
      <Link to="/">
        <img src={X} className="Movies-ProfilePic" />
      </Link>
    </div>
    <p>46 items</p>

    <br />
    <p>Netflix - My List</p>
    <div className="Movies-list-container">
      <div className="Movies-list-view">
        <Link to="/movies/arrival" >
          <img className="Movies-thumbnail" src={arrival} />
        </Link>
        <Link to="/movies/avengers" >
          <img className="Movies-thumbnail" src={avengers} />
        </Link>
        <Link to="/movies/darknight" >
          <img className="Movies-thumbnail" src={darknight} />
        </Link>
        <Link to="/movies/divergent" >
          <img className="Movies-thumbnail" src={divergent} />
        </Link>
        <Link to="/movies/guardians" >
          <img className="Movies-thumbnail" src={guardians} />
        </Link>
      </div>
    </div>




    <br />
    <p>Amazon Prime Video - Watchlist</p>
    <div className="Movies-list-container">
      <div className="Movies-list-view">
        <Link to="/movies/mockingjay" >
          <img className="Movies-thumbnail" src={mockingjay} />
        </Link>
        <Link to="/movies/oblivian" >
          <img className="Movies-thumbnail" src={oblivian} />
        </Link>
        <Link to="/movies/pirates" >
          <img className="Movies-thumbnail" src={pirates} />
        </Link>
        <Link to="/movies/thor" >
          <img className="Movies-thumbnail" src={thor} />
        </Link>
        <Link to="/movies/sherlock" >
          <img className="Movies-thumbnail" src={sherlock} />
        </Link>
      </div>
    </div>
  </div>


);