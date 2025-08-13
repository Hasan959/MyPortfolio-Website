import React from 'react'

const Skillsitem = ({img,title,level,catagory}) => {
  return (
    <div className='skills-data'>
        <div className='skills-blob'>
            <img src={img} alt="" className='skills-img' />

        </div>

            <h3 className='skills-name'> {title} </h3>
            <span className='skills-level'> {level} </span>
            


        

    </div>
  )
}

export default Skillsitem