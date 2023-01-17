import "../components/WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WordCardData"

import React from 'react'


const Work=(props)=> {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}

                    />
                )
            })}       
        </div>
    </div>
  )
}

export default Work;
