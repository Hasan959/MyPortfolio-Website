import { stats } from "../Data"
import parse from 'html-react-parser'


const Stats = () => {
  return (
    <div>
        {stats.map(({no, title},index) => {
            return (
                <div className="stats-box" key={index} >
                    <h3 className="stats-no">{no}</h3>
                    <p className="stats-title"> {parse(title)} </p>
                </div>
            )
        })}
    </div>
  )
}

export default Stats