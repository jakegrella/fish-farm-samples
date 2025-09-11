import fish from '../../../../../public/fish-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { CartIcon } from './CartIcon'

export default function Header() {
  return (
    <header className="flex justify-between mb-10 md:mb-20">
      <Link href="/">
        <Image src={fish} alt="Fish Farm Samples logo" width={32} />
      </Link>
      <CartIcon />
    </header>
  )
}
