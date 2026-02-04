import React from 'react'
import SOLARIS from "./SOLARIS/SOLARIS"
import Goals from "./Goals/Goals"
import WhatFor from "./WhatFor/WhatFor"
import TeamCommitte from './TeamCommitte/TeamCommitte'
import Progress from './Progress/Progress'

const Home = () => {
  return (
    <div className="overflow-hidden">
        <SOLARIS/>
        <Goals/>
        <WhatFor/>
        <TeamCommitte/>
        <Progress/>
    </div>
  )
}

export default Home