import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h1>Services</h1>
      <div className="container service_container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Desinger</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creative Direction</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Strong layout and graphic redesign</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Graphics, Logo Design & Identity or Brand Development</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creative Online Advertising Solutions</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Architecture, Usability, & Online branding </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Flash and HTML5 Animation</p>
            </li>
          </ul>
        </article>
        {/* {END OF UI/UX LIST} */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visually appealing, polished, and professional</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>With easily accessible contact information</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Matching the current trends</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Regularly checked for any broken links or not working scripts</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Regularly checked for any broken links or not working scripts</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Regularly checked for any broken links or not working scripts</p>
            </li>

            
          </ul>
        </article>
        {/* {END OF WEB DEVELOPMENT LIST} */}
        <article className='service'>
          <div className="service__head">
            <h3>Social Media Martketing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>social media strategy</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>3 social media handles</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>15 still design posts per month, Community management</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>4 Ad Campaigns, Reputation management</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Query management, Community management Content creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cancel anytime & Money Back Guarantee</p>
            </li>
          </ul>
        </article>
        {/* {END OF SOCIAL MEDIA MARKETING LIST} */}
      </div>
    </section>
  )
}

export default services