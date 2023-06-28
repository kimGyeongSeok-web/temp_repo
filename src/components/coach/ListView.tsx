import { useState } from "react";
import styled from "@emotion/styled";
import NoResult from "@components/common/NoResult";
import DataList from "./DataList";

const ListView = () => {

  const testArr = [
    {
      id: "dd"
    }
  ]

  const [data, setData] = useState<Array<object>>(testArr);

  return (
    <Container>
      {
        data && data.length > 0 ?
          <DataList />
          :
          <NoResult height={"30%"} description={"아직 코치님이 존재하지 않아요."} />
      }
    </Container>
  )
}

const Container = styled.div({
  position: "relative",
  width: "100%",
  height: "calc(85% - 32px)",
  padding: "16px 0"
})

export default ListView;