import React from 'react'
import Hero from '../assets/about-banner.png'

function About() {
  return (
    <div className="container mt-5 vh-100">
      <img className="img-fluid mb-3 rounded" src={Hero} />
      <h1 >About Lift Phit</h1>
      <p>
      <strong>Lift Phit</strong> has been in operations for a year now and we are constantly making imporvements. I provements inspired by <abbr title="attribute">you</abbr> the user. Our app started off as a solutoion to a problem that I had. Maybe you are like me? Do you use multiple app to tracks different aspects of your weight training journey? I won't name any names, but I ws using apps to track my workouts, to track my sleep, to track my heart, to track my diet, to track my blood pressure. I was tired of switching from app to app and wanted to see all of mt health data in one place. That ws when the idea for Lift Phit was born. It started out offering the fearutes that I desired but as time when on we started adding the fetures that you suggested because this is not just my app now, it's <abbr title="attribute">our app</abbr>!
      </p>
      </div>
  )
}

export default About;
