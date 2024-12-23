'use client'
import React, { useState } from 'react';
import '../css/styles2.css';
import { Roboto, Inter } from 'next/font/google';
import { FY, quarters, tabsData } from '../work/data';
const roboto = Roboto({ weight: ['500'], subsets: ['latin'] });
const inter = Inter({ weight: ['500'], subsets: ['latin'] });



export default function SwitchTab() {
  const [activeTab, setActiveTab] = useState(2);
  const [selectedFy,setSelectedFY]= useState('FY 24-25');
  const [selectedQuarter,setSelectedQuarter]=useState('Q3');

  
  return (
    <>
      <div className="main-div">
        <div className="mentor-switcher">
          <div className="switcher-div">
            <div className="tabs">
              <div className="tab-group">
                {tabsData.map((tab) => (
                  <div
                    key={tab.id}
                    className={`${tab.id 
                        === activeTab ? 'active-tab' : 'tab'}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="layer1">
                      <div className="tab-components">
                        <h5 className={roboto.className}>{tab.label}</h5>
                        <div
                          className="tab-icon"
                          style={{
                            backgroundColor: tab.iconColor,
                            opacity: tab.id === activeTab ? 1 : 0.6,
                          }}
                          >
                          <span className={inter.className}>{tab.count}</span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="frame-tab">
            {/* DropDown1 */}
          <div className="filter-chip1">
            <div className="state-layer1 select-wrapper">
             <select className='filter-select'
             value={selectedFy}
             onChange={(e)=>setSelectedFY(e.target.value)}>
             {
                FY.map((fy)=>(
                    <option key={fy} value={fy}>{fy}</option>
                ))
             }
             </select>
            </div>
          </div>
          
         {/* DropDown2 */}
          <div className="filter-chip2">
            <div className="state-layer2 select-wrapper1 {inter.className}">
              <select className='filter-select'
               value={selectedQuarter} onChange={(e)=>setSelectedQuarter(e.target.value)}>
                {
                    quarters.map((quarter)=>(
                        <option key={quarter} value={quarter}>{quarter}</option>
                    ))

                }
               </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
