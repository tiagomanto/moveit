import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
  const { level} = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img  src="https://avatars.githubusercontent.com/u/17864074?s=460&u=c56e7805f888dc445cc3a17b16f204a204d589c1&v=4" alt="Tiago"/>
      <div>
        <strong>Tiago Mantovani</strong>

        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
          </p>
      </div>
    </div>
  )
}