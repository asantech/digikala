import AppLogo from "@/components/atoms/logos/AppLogo"
import SearchInput from "@/components/molecules/inputs/SearchInput"
import SignUpSignInButton from "@/components/atoms/buttons/SignUpSignInButton"
import CartButton from "@/components/atoms/buttons/CartButton"

function HeaderMiddleSegment() {
  return (
    <>
      <AppLogo />
      <SearchInput />
      <SignUpSignInButton />
      <CartButton />
    </>
  )
}

export default HeaderMiddleSegment
