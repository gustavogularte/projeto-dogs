import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed';

const UserPerfil = () => {
  const {user} = useParams();

  return (
    <Feed user={user}/>
  )
}

export default UserPerfil
