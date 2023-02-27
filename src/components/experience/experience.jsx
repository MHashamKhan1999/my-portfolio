import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      
      <h5>What Skills I Have</h5>
      <h1>My Experience</h1>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>React</h4>  
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>
        {/* {End Of FrontEnd Complete} */}

        {/* {Start of Backend} */}
        <div className="experience__backend">
          <h3>Back-End Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>Node Js</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small></div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>Flutter Dart</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className="experience__details_icons"/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience