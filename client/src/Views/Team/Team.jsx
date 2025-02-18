import React from 'react'
import './Team.css'
import { useTeam } from '../../Contexts/TeamProvider'
import TeamMember from './Components/TeamMember'

const Team = () => {
    const { team } = useTeam()
  return (
    <section className='team'><h2>Team</h2 >
    {team.map((member)=>{
        return <TeamMember key={member.id} member={member}/>
    })}
     </section>
  )
}

export default Team