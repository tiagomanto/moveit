import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompleteChanllenges.module.css'


export function CompletedChallenges(){
  const { challengesCompleted} = useContext(ChallengesContext)

  return(
    <div className={styles.CompleteChanllengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}