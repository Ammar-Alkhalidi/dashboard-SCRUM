import React from 'react'
import './css/TeamMember.css'

const TeamMember = ({member}) => {
  return (
    <div className='container'>{member.name}</div>
  )
}

export default TeamMember