import { menteeData } from "../work/data";
import '../css/styles1.css'
import React from 'react'

export default function MentorBody() {
  return (
    <>
    <div className="mentor-body">
       {
        menteeData.map((mentee)=>(
            <div key={mentee.id} className="mentee-card">
                {/* Header*/}
                <div className="header" style={{backgroundColor:mentee.headerColor}}>
                    <div className="frame">
                        <h6>{mentee.title}</h6>
                        <div className="badge">
                            <span>{mentee.count}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="content">
                    <div className="quarter-text">
                       Current Quarter ({mentee.quarter}):
                    </div>
                    <div className="card" style={{backgroundColor:mentee.cardBgColor}}>
                        <div className="rectangle" style={{backgroundColor:mentee.rectangleColor}}></div>
                        <div className="sub-content">
                            <div className="name">{mentee.name}</div>
                            <div className="role">{mentee.role}</div>
                        </div>

                    </div>
                </div>    

            </div>
        ))
       } 
    </div>
    </>
  )
}
