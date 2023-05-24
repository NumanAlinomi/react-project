import React from 'react'

function ApiFetch() {
  const me=prompt("numan")
  const you=prompt("ali")
  localStorage.setItem(me,you)
  console.log(`${me}(${localStorage.getItem(you)}`)
  return (
    
    <div>
      <h1>numan</h1>
      
    </div>
  )
}

export default ApiFetch
