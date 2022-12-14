import styles from "../../../styles/Home.module.css";
import logo from "../../components/image/LOGO.png";
import Image from "next/image";
import Link  from 'next/link'

const Navbar = () => {

  return (
<div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#fffff] rounded-box w-52 text-black">
      <Link href='pegawai'>
      <li><a>Data Pegawai</a></li>
      </Link>
      </ul>
    </div>
    <Image src={logo} className='w-40 h-60' alt="logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-black">
    <Link href='pegawai'>
      <li><a>Data Pegawai</a></li>
      </Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href='login'>
    <a className='text-[#128ECC]'>Masuk</a>
    </Link>
  </div>
</div>

  );
};

export default Navbar;
