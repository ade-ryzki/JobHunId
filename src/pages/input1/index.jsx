import min from "../../components/image/Vector.png";
import tanggal from "../../components/image/tanggal.png";
import Navbar from "../../components/navbar";
import Image from "next/image";

const Input1 = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex justify-center mt-10">
            <form className="object-center">
              <div className="relative z-0 mb-6">
                <input type="text" id="floating_standard" className="block py-2.5 px-0 w-[850px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Informasi Pribadi</label>
              </div>
              <div className="relative z-0 mb-6">
                <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Riwayat Pendidikan</label>
              </div>
              <input className="mb-6" id="" type="file" multiple />
              <div className="relative z-0 mb-6">
                <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sertifikasi</label>
              </div>
            </form>
          </div>
          <div className="flex justify-end mt-10 mr-[340px]">
            <button className="btn w-[200px] hover:bg-[#128ECC] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-[#128ECC] active:shadow-lg transition duration-150 ease-in-out  text-black" >
              Masuk
            </button>
          </div>
    </div>
  );
};
export default Input1;
