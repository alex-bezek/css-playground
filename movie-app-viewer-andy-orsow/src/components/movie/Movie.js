import React from 'react';
import { Link } from 'react-router-dom'
// import './Movie.css';

export default ({ thumbNail, background, title, year, text}) => (
  <div className="Movie">
    <h1>Hello Movie</h1>
    <div>{ thumbNail }</div>
    <div>{ background }</div>
    <div>{ title }</div>
    <div>{ year }</div>
    <div>{ text }</div>
  </div>


);