import { RiMap2Line ,RiUser3Line ,RiMailLine ,RiBook2Line ,RiSendPlaneLine } from "react-icons/ri";
import './contact.css'


const Contact = () => {
  return (
    <section className='contact section'>
      <h2 className='section-title'>
        Contact <span>Me</span>
      </h2>

      <div className='contact-container container grid'>
        <div className='contact-content grid'>

          <div className='contact-card'>
            <span className='contact-icon'>
              <RiMap2Line />
            </span>

            <div>
              <h3 className="contact-title"> Address</h3>
              <p className="contact-data">Natore,Rajshai,Dhaka</p>
            </div>
          </div>



          <div className='contact-card'>
            <span className='contact-icon'>
              <RiUser3Line />
            </span>

            <div>
              <h3 className="contact-title">Freelance</h3>
              <p className="contact-data">Avalable Right now</p>
            </div>
          </div>



          <div className='contact-card'>
            <span className='contact-icon'>
              <RiMailLine />
            </span>

            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data"> hasanmahmud.biddut@gmail.com </p>
            </div>
          </div>


          <div className='contact-card'>
            <span className='contact-icon'>
              <RiBook2Line />
            </span>

            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">01755327835</p>
            </div>
          </div>


        </div>

        <form action="" className="contact-form grid">

          <div className="contact-form-group grid">

             <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your full Name
                </label>
                <input type="text" name="name" className="contact-form-input" />
             </div>

             <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your Email Address 
                </label>
                <input type="email" name="email" className="contact-form-input" />
            </div>

          </div>

          <div className="contact-form-div">

                <label htmlFor="" className="contact-form-label">
                  Your Subject <b>*</b>
                  </label>
                <input type="email" name="email" className="contact-form-input" />

          </div>
          <div className="contact-form-div">

                <label htmlFor="" className="contact-form-label">
                  Your Message <b>*</b>
                </label>
                <textarea name="message" className="contact-form-input contact-form-area" id=""></textarea>
                <input type="email" name="email" className="contact-form-input" />

          </div>
          <div className="contact-button">
            <button className="button">
              Send Message <span className="button-icon"><RiSendPlaneLine /></span>
            </button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact