import deletee from "../../components/image/delete.png";
import edit from "../../components/image/edit.png";
import tambah from "../../components/image/tambah.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
// import axios from 'axios'

const Pegawai = () => {

  return (
    
    <div className="bg-white">
      <Navbar/>
      <div className=" justify-items-center text-black bg-white mt-10">
        <div className="flex justify-around">
          <div>
          <h3>Annisa Putri Pangestu</h3>
          </div>
          <div>
            <Image src={deletee} alt='delete'/>
            <Image src={edit} alt='delete'/>
          </div>
        </div>
        <div className="flex ml-80 mt-5">
          <button className="btn bg-white hover:bg-[#a49f9f]">
          <Image src={tambah} alt='tambah'/>
          </button>
          <h3 className="text-[#128ECC] self-center ml-2">Tambah Pegawai</h3>
        </div>
        <div className="flex ml-80 mt-5 text-[#414141]">
          <a>Tambah jika anda ingin mendaftarkan lebih dari satu pegawai</a>
        </div>
      </div>
      <div className="flex justify-center mt-[250px] mb-[100px]">
            <button className="btn w-[885px] hover:bg-[#128ECC] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#128ECC] active:shadow-lg transition duration-150 ease-in-out  text-black" >
              Kirim
            </button>
          </div>
    </div>
  );
};
export default Pegawai;
