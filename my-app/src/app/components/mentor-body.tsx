import React from 'react'
import '../css/styles1.css'
import {Roboto} from "next/font/google";
export default function MentorBody() {
  return (
    <>
    <div className='mentor-body'>
       {/* Project Mentee*/ }
        <div className='mentee-card'>
        <div className='header'>
            <div className='frame'>
                <h6>Project Mentee</h6>
                <div className='badge'>
                    <span>1</span>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='quarter-text'>Current Quarter (Q3):</div>
            <div className='card'>
            <div className="rectangle"></div>
            <div className="sub-content">
                <div className="name">Ankita Shrivastava</div>
                <div className="role">Project Manager</div>
            </div>

            </div>
 
        </div>
        </div>
      
      {/* Skill Mentee */}
      <div className='mentee-card'>
        <div className='header'>
            <div className='frame'>
                <h6>Project Mentee</h6>
                <div className='badge'>
                    <span>1</span>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='quarter-text'>Current Quarter (Q3):</div>
            <div className='card'>
            <div className="rectangle"></div>
            <div className="sub-content">
                <div className="name">Ankita Shrivastava</div>
                <div className="role">Project Manager</div>
            </div>

            </div>
 
        </div>
        </div>

        {/* Domain Mentee */}

        <div className='mentee-card'>
        <div className='header'>
            <div className='frame'>
                <h6>Project Mentee</h6>
                <div className='badge'>
                    <span>1</span>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className='quarter-text'>Current Quarter (Q3):</div>
            <div className='card'>
            <div className="rectangle"></div>
            <div className="sub-content">
                <div className="name">Ankita Shrivastava</div>
                <div className="role">Project Manager</div>
            </div>

            </div>
 
        </div>
        </div>

    </div>
    </>
  )
}
