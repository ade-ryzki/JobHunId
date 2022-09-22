import min from "../../components/image/Vector.png";
import tanggal from "../../components/image/tanggal.png";
import Navbar from "../../components/navbar";
import Image from "next/image";

const Admin = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex justify-around mt-[150px] mb-[50px]">
        <div>
          <h3 className="text-[#128ECC]">Informasi Pribadi</h3>
        </div>
        <div>
          <Image src={min} alt="min" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
            <form className="object-center">
              <div>
                <p className=" font-[Rubik] text-m  text-[#4E4B66] leading-6 mb-3">
                  Nama Lengkap
                </p>
                <input
                  type="text"
                  className="form-control block w-[850px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                  id=""
                  placeholder="Ade Ryzki Aprinata"
                />
              </div>
              <div>
                <p className=" font-[Rubik] text-m  text-[#4E4B66] leading-6 mb-3 flex">
                  Tanggal Lahir
                </p>
                <input
                  type="text"
                  className="form-control block w-[850px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                  id=""
                  placeholder=""
                />
              </div>
              <div>
                <p className=" font-[Rubik] text-m  text-[#4E4B66] leading-6 mb-3 flex">
                  Umur
                </p>
                <input
                  type="text"
                  className="form-control block w-[850px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                  id=""
                  placeholder=""
                />
              </div>
              <div>
                <p className=" font-[Rubik] text-m  text-[#4E4B66] leading-6 mb-3 flex">
                  Alamat Lengkap 
                </p>
                <input
                  type="text"
                  className="form-control block w-[850px] px-3 py-2 text-sm font-normal text-[#388087]-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out mb-5 focus:text-gray-700 focus:bg-white focus:border-[#388087]-600 focus:outline-none"
                  id=""
                  placeholder=""
                />
              </div>
              <div className='mb-6'>
                <label htmlFor="countries" className="font-[Rubik] text-m  text-black mb-3 leading-6">Provinsi</label>
                <select id="countries" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Pilih Provinsi</option>
                  <option  value="US">Kepri</option>
                  <option value="CA">Riau</option>
                  <option value="FR">Jawa tengah</option>
                  <option value="DE">Jawa Timur</option>
                </select>
              </div>
              <div className='mb-6'>
                <label htmlFor="countries" className="font-[Rubik] text-m  text-black">Kota/Kabupaten</label>
                <select id="countries" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Pilih Kabupaten</option>
                  <option  value="US">Batam</option>
                  <option value="CA">Tanjung Pinang</option>
                  <option value="FR">Tanjung Balai</option>
                  <option value="DE">Lingga</option>
                </select>
              </div>
              <div className="relative z-0 mb-6">
                <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Riwayat Pendidikan</label>
              </div><div className="relative z-0 mb-6">
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
export default Admin;
