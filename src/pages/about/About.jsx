
import Info from '../../components/Info'
import { RiDownload2Line } from "react-icons/ri";
import Cv from '../../pdf/cv of Hasan Mahmud.pdf'
import Stats from '../../components/Stats';
import './about.css'
import { skill } from '../../Data';
import Skillsitem from '../../components/Skillsitem';


const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>


        <div className='about-container grid'>
          <div className='about-info'>
            <h3 className='section-subtitle'>Personal Info</h3>

            <ul className='info-list grid'>
              <Info/>
            </ul>

            <a href={Cv} download='' className="button">
              Download Cv
              <span className='button-icon'>
                <RiDownload2Line />
              </span>
            </a>
            
          </div>

          <div className="stats grid">
            <Stats/>
          </div>
        </div>

      </section>

      <div className="separator"></div>

      <section className="skills">

        <h3 className='section-subtitle subtitle-center'> My Skills</h3>

        <div className="skills-container grid">
            <div className="skills-group">
               <h3 className='skills-title'>Frontend Developer</h3>

               <div className="skills-items grid">
                {skill.map((val) => {
                  if(val.category ==='developer') {
                    return <Skillsitem key={val.id} {...val}/>;
                  }
                })}
               </div>
            </div>

            <div className="skills-group">
               <h3 className='skills-title'>Web Designer</h3>

               <div className="skills-items grid">
                {skill.map((val) =>{
                  if(val.category==='designer'){
                    return<Skillsitem key={val.id} {...val}/>
                  }
                })}
               </div>
            
            </div>
        </div>
      </section>
    </main>
  )
}

export default About