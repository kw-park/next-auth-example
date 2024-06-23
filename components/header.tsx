import { LogoNav } from "./main-nav"
import UserButton from "./user-button"

export default function Header() {
  return (
    <header className="flex w-full">
      <div className="flex w-full">
        <div className="flex w-40 gap-2">
          <LogoNav />
        </div>
        <div className="flex w-full gap-6 justify-end">
          <UserButton />
        </div>        
      </div>
    </header>
  )
}
