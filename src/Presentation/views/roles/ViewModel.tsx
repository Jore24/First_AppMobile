import React from 'react'
import { useUserLocal } from '../../hooks/userLocal'


const RolesViewModel = () => {

  const { user } = useUserLocal();

  return {
    user



  }
}

export default RolesViewModel