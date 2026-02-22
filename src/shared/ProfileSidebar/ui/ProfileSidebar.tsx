'use client'

import React, { useState } from 'react'
import { Avatar } from '@/shared/Avatar'
import styles from './ProfileSidebar.module.scss'

type ProfileState = 'Trial' | 'Pro' | 'Admin'

const ProfileSidebar = () => {
  const [profileStatus, setProfileStatus] = useState<ProfileState>('Trial')

  return (
    <div className={styles['profile']}>
      <Avatar />
      <div className={styles['profile-name']}>
        <span>Тулыбаев Айгиз</span>
        <div className={styles['profile-status']}>{profileStatus}</div>
      </div>
    </div>
  )
}

export default ProfileSidebar
