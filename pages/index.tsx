import Head from 'next/head'
import styled from '@emotion/styled'
import CoachLesson from '@components/Home/CoachLesson'
import PreDashBoard from '@components/Home/PreDashBoard'
import Sales from '@components/Home/Sales'

export default function Home() {

  return (
    <>
      <Head>
        <title>테니스 닥터 - 홈</title>
      </Head>
      <PreDashBoard />
      <ItemLists>
        <CoachLesson />
        <Sales />
      </ItemLists>
    </>
  )
};

const ItemLists = styled.ul({
  display: "flex",
})