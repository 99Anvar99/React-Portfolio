import React from 'react'
// importing style
import '../styles/aboutMe.css'
function aboutMe() {
  return (
    <div className="aboutMe">
      <h1 id="name">Hi, I'm Anvar Ganiev</h1>
        <div className="prompt">
          <p>Full Stack Developer</p>
        <img src="https://github.com/99Anvar99/Personal_Portfolio/blob/main/MyAvatar.png?raw=true" alt="Avatar"/>
        </div>
        <h2 id="aboutMeTitle">About Me</h2>
        <p id="aboutMeDescription">Hi, my name is Anvar, and I'm a 20-year-old fullstack web developer living in Ontario, Canada. 
        I have experience working with several programming languages, including C++, C#, JavaScript, java, and much more.
        In addition to my interest in technology, I'm also a dedicated martial artist. 
        I practice Taekwondo and have achieved a black belt, which has taught me valuable lessons about discipline, 
        focus, and perseverance. 
        When I'm not coding or practicing martial arts, I enjoy spending time with friends and family, reading, and exploring the great outdoors. 
        I'm always looking for new challenges and opportunities to learn and grow, both personally and professionally. 
        Overall, I'm a driven and curious individual who is passionate about technology, martial arts, and personal growth. 
        I believe that anything is possible with hard work, dedication, and a willingness to learn, and I'm excited to see where my journey takes me in the future.
        </p>
    </div>
  )
}

export default aboutMe