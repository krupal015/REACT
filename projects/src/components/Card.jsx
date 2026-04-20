import { Bookmark } from "lucide-react";

 const Card = (props) => {
  console.log(props.company)
  return (
    <div>
      <div className="parent">
        <div className="card">
          <div className="top">
            <img
            src={props.logo}
            alt="job"
            />
            <button>
              Save <Bookmark size={16} />
            </button>
          </div>

          <div>
            <div className="mid">
            <h3>
              {props.company}  <span>{props.date}</span>
            </h3>
            <h2>{props.post}</h2>
          </div>

          <div className="job-type">
            <div>{props.tag1}</div>
            <div>{props.tag2}</div>
          </div>
          </div>

          <div className="bottom">
            <div>
              <h3>${props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Card;