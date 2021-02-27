import React from "react";
import { GetServerSideProps} from 'next'

import styles from '../styles/pages/Home.module.css'
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

  interface HomeProps{
    level:number,
    currentExperience:number,
    challengesCompleted:number
  }


export default function Home(props:HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

    <ExperienceBar/>
    
    <CountDownProvider>
      <section>
        <div> 
          <Profile/>
          <CompletedChallenges/>
          <Countdown/>
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </CountDownProvider> 
    </div>
    </ChallengesProvider>
  )
}
export const getServerSideProps:GetServerSideProps = async (ctx)=>{
  const {level,currentExperience, challengesCompleted} = ctx.req.cookies;

  return{
    props:{
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted  )
    }
  }
}
