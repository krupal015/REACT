import React from 'react'

const weather = (temp) => {

    if(temp<15){
      return <h1>the temperature is low</h1>
    } else if(temp>15 && temp <25){
      return <h1> temperature  is medium</h1>
    }else{
      return <h1>temperature is high</h1>
    }
}

export default weather
