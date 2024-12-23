import React from 'react'
import '../css/styles2.css'
import {Roboto,Inter,} from "@next/font/google";

const roboto=Roboto({weight:['500'],subsets:['latin']})
const inter=Inter({weight:['500'],subsets:['latin']})

export default function SwitchTab() {
  return (
    <>
    <div className='main-div'>
        <div className='mentor-switcher'>
            <div className='switcher-div'>
                <div className='tabs'>
                    <div className='tab-group'>
                        <div className='tab1'>
                            <div className='layer1'>
                                <div className='tab-components'>
                                    <h5 className='roboto.className'>MY MENTORS</h5>
                                    <div className='tab-icon1'>
                                        <span className='inter.className'>9</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='tab2'>
                            <div className='layer1'>
                                <div className='tab-components1'>
                                    <h5 className='roboto.className'>MY MENTEES</h5>
                                    <div className='tab-icon2'>
                                        <span className='inter.className'>4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Filters */}
        <div className='frame-tab'>
            <div className='filter-chip1'>
                <div className='state-layer1'>
                    <div className='filter-label1'>
                        <p className='text1'>FY 24-25</p>
                    </div>
                    <div className='icon1'>&#9662;</div>
                </div>
            </div>

            <div className='filter-chip2'>
                <div className='state-layer2'>
                    <div className='filter-label2'>
                        <p className='text1'>Q3</p>
                    </div>
                    <div className='icon1'>&#9662;</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
