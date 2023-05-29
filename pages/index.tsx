import Head from 'next/head'
import Image from 'next/image'
import CoachLesson from '@components/Home/CoachLesson'
import PreDashBoard from '@components/Home/PreDashBoard'
import Sales from '@components/Home/Sales'

export default function Home() {

  return (
    <>
      <Head>
        <title>테니스 닥터 - 홈</title>
      </Head>
      <>
        <PreDashBoard />
        <div>
          <CoachLesson />
          <Sales />
        </div>
      </>
    </>
  )
}