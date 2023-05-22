import { PropsWithChildren } from "react";
import styled from "@emotion/styled";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      레이아웃
      <Test>33</Test>
      {children}
    </>
  )
}

const Test = styled.div({

})

export default AppLayout;