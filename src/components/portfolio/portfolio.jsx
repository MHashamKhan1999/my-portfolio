import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


// Method of Returning a data

// const data =[
//   {
//     id: 1,
//     img: "paste the path of Img",
//     title: "give some title here",
//     github: "paste github link here",
//     demo: "paste the live demo link here"
//   },
//   {
//     id: 2,
//     img: "paste the path of Img",
//     title: "give some title here",
//     github: "paste github link here",
//     demo: "paste the live demo link here"
//   },

// ]



// // Dynamic Method for Calling A Protfolio with the help of Array
// const portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>
//       <div className="container portfolio__container">  
//         {
//           data.map(({id, img, title, github, demo})=>{
//             return (
//               <article key={id} className='portfolio__item'>
//                 <div className='portfolio__item-img'>
//                   <img src={img} alt={title} />
//                 </div>
//                 <h3>{title}</h3>
//                 <div className="portfolio__item-cta">
//                   <a href={github} className='btn'>Github</a>
//                   <a href={demo} target="_blank" className='btn btn-primary'>Live Demo</a>
//                 </div>
//             </article>
//             );
//           })
//         }
//       </div>
//     </section>
//   )
// }

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* Portfolio 1 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="portfolio-Image" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MHashamKhan1761999" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/17196194-Digital-Marketing-Agency-Landing-Page-Dark-Mode" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        {/* Portfolio 2 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG2} alt="portfolio-Image" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MHashamKhan1761999" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/17196194-Digital-Marketing-Agency-Landing-Page-Dark-Mode" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        {/* Portfolio 3 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG3} alt="portfolio-Image" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MHashamKhan1761999" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/17196194-Digital-Marketing-Agency-Landing-Page-Dark-Mode" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        {/* Portfolio 4 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG4} alt="portfolio-Image" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MHashamKhan1761999" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/17196194-Digital-Marketing-Agency-Landing-Page-Dark-Mode" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        {/* Portfolio 5 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG5} alt="portfolio-Image" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MHashamKhan1761999" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/17196194-Digital-Marketing-Agency-Landing-Page-Dark-Mode" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        {/* Portfolio 6 */}
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG6} alt="portfolio-Image" />
          </div>
          <h3>This is a Portfolio Item</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MHashamKhan1761999" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/17196194-Digital-Marketing-Agency-Landing-Page-Dark-Mode" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio