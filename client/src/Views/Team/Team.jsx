import React from 'react'
import './Team.css'
import { useTeam } from '../../Contexts/TeamProvider'

const Team = () => {
    const { team } = useTeam()
  return (
    <section className='team'>Team</section>
  )
}

export default Team