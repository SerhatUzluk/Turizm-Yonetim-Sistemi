import React from 'react'

const UpdateExpedition = () => {
  return (
    <div className=' flex flex-col justify-center items-start w-1/2 mx-auto gap-y-10 font-gemunu font-bold'>
        <div className=' flex flex-col justify-center items-center gap-2 border-b-2 bg-light py-8 w-full mx-auto rounded-xl shadow-xl mt-4'>
            <h2 className=' font-bold font-gemunu text-3xl '>Sefer Güncelleme Sayfası</h2>
        </div>

        <div className='w-full shadow-xl p-2 rounded flex justify-center items-center'>
            <form className=' flex flex-col gap-y-8 justify-center items-start'>
                <div className='flex justify-center items-center gap-y-1 border-b py-2 w-[460px]'>
                    <label className=' w-72'>Firma Logo Dosyası Seçin</label>
                    <input type="file"  className=' ml-32'/>
                </div>

                <div className='flex justify-center items-center gap-y-1 border-b py-2'>
                    <label className=' w-72'>Firma Adı Girin</label>
                    <input type="text" className=' border rounded ' placeholder='firma adı' />
                </div>

                <div className='flex justify-center items-center gap-y-1 border-b py-2'>
                    <label className=' w-72'>Otobüs Koltuk Tipi Seçin</label>
                    <select name="" id="" className=' w-44'>
                        <option value="" selected disabled>Seçiniz</option>
                        <option value="">2 + 1</option>
                        <option value="">2 + 2</option>
                    </select>
                </div>

                <div className='flex justify-center items-center gap-y-1 border-b py-2'>
                    <label className=' w-72'>Kalkış Yeri</label>
                    <input type="text" className=' border rounded ' placeholder='şehir olarak girin' />
                </div>

                <div className='flex justify-center items-center gap-y-1 border-b py-2'>
                    <label className=' w-72'>Varış Yeri</label>
                    <input type="text" className=' border rounded ' placeholder='şehir olarak girin'/>
                </div>

                <div className='flex justify-center items-center gap-y-1 border-b py-2'>
                    <label className=' w-72'>Bilet Fiyatı</label>
                    <input type="text" className=' border rounded ' placeholder='₺ olarak girin'/>
                </div>

                <div className='flex justify-center items-center gap-y-1 w-full'>
                    <button className=' bg-darkBlue w-56 p-2 rounded text-white hover:bg-blue transition-all'>Seferi Güncelle</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateExpedition