import React from 'react'

const AddPersonel = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-y-10 p-4'>

        <div className=' font-bold font-gemunu text-4xl tracking-widest border-b'>
            <h2>Personel Ekle</h2>
        </div>


        <form className=' w-1/4 flex flex-col gap-y-6 '>
            <div className=' flex flex-col gap-y-2'>
                <label className=' font-bold'>İsim Giriniz</label>

                <input type="text" placeholder='isim...' className=' border p-2 rounded text-black' />
            </div>

            <div className=' flex flex-col gap-y-2'>
                <label className=' font-bold'>Soyad Giriniz</label>

                <input type="text" placeholder='soyad...' className=' border p-2 rounded text-black' />
            </div>

            <div className=' flex flex-col gap-y-2'>
                <label className=' font-bold'>Mail Giriniz</label>

                <input type="email" placeholder='@gmail.com' className=' border p-2 rounded text-black' />
            </div>

            
            <div className=' flex flex-col gap-y-2'>
                <label className=' font-bold'>Telefon No Giriniz</label>

                <input type="number" placeholder='+90' className=' border p-2 rounded text-black' />
            </div>

            <div className=' flex flex-col gap-y-2'>
                <label className=' font-bold'>Ünvan Seçiniz</label>

                <select name="" id="">
                    <option value="" selected disabled> Seçiniz</option>
                    <option value="">Satış Personeli</option>
                    <option value="">Yönetici</option>
                    <option value="">Planlama Personeli</option>
                </select>
            </div>

            <div className=' flex justify-center'>
                <button className=' bg-darkBlue p-2 rounded w-60 hover:bg-blue transition-all text-white'>Personeli Ekle</button>
            </div>
            
        </form>
    </div>
  )
}

export default AddPersonel