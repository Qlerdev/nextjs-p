import Link from "next/link"

const NavBar = () => {
  return (
    <>
        <nav className="flex justify-between items-center p-2 text-[20px]">
            <div className="flex gap-2 ">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/info'>Info</Link>
                <Link href='/camp'>Camp</Link>
            </div>
            <div className="flex gap-2 ">
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
            </div>
        </nav>
        <hr className="mb-[10px]"/>
    </>

  )
}

export default NavBar