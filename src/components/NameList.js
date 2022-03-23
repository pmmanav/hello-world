import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Pratyush', 'Mani', 'Manav']
    const nameList = names.map(name => <h2>{name}</h2>)
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2>
        <h2>{names[4]}</h2>
        <h2>{names[5]}</h2> */}
        {/* {
             names.map(name => <h2>{name}</h2>)
        } */}
        {nameList}

    </div>
  )
}

export default NameList 