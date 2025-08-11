import Info from "../../components/Info"


const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section-title'>
          About <span>Me</span>
        </h2>

        <div className='about-container grid'>
          <div className='about'>
             <h3 className='section-subtitle'>Personal Info</h3>

             <ul className='Info-list grid'>
              <Info/>
             </ul>
             <a href="" className="button"></a>
          </div>
        </div>

      </section>

    </main>
  )
}

export default About