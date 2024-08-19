import { PropsWithChildren } from "react"

import Header from "@/components/organisms/layout/header/Header"

function MainLayoutTemplate({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayoutTemplate
