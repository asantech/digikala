import Link from "next/link"

import { AppLogo } from "../logos/AppLogo"

function AppLogoLink() {
  return (
    <Link href="/">
      <AppLogo />
    </Link>
  )
}

export default AppLogoLink
