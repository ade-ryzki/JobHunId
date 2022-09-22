import BG from "../../components/image/BG.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter }from "next/router";
import { AuthLogin } from '../../redux/actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios'

const Login = () => {

  return (
    <div>
      <div className="grid grid-col-3 md:grid-flow-col text-black font-[Nunito]">
        <Image className="z-50" src={BG} alt="" />
        <div className="bg-white ">
          <div className="flex justify-center mx-8 mt-20">
            <div>
              <a className="normal-case text-3xl font-bold text-black">
                Hallo!
              </a>
            </div>
          </div>
          <div className="flex justify-center">
              <a a className="normal-case text-[#414141]">
              Silahkan masukkan data di bawah ini
              </a>
            </div>
          <div className="flex justify-center mt-10">
            <form className="object-center">
              <div>
                <input
                  type="text"
                  className="form-control block w-[500px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-control block w-[500px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>
          <div className="flex justify-center mt-10">
            <button className="btn w-[500px] hover:bg-[#128ECC] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#128ECC] active:shadow-lg transition duration-150 ease-in-out  text-black" >
              Masuk
            </button>
          </div>
          <div className="flex justify-center text-center my-10 font-bold">
            <a>Belum punya akun?</a>
            <Link href={"/signup"}>
            <a className="text-[#128ECC] pl-2">Daftar sekarang</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
