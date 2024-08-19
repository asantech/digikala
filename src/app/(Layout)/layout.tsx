import { PropsWithChildren } from "react"

import MainLayoutTemplate from "@/components/templates/layouts/MainLayoutTemplate"

export default function MainLayout({ children }: PropsWithChildren) {
  return <MainLayoutTemplate>{children}</MainLayoutTemplate>
}
