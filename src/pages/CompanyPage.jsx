import React from 'react'
import { useNavigate } from 'react-router-dom'

const CompanyPage = () => {

    const navigate = useNavigate();

  return (
    <div className='w-2/3 mx-auto my-4 rounded-xl shadow-xl flex justify-start items-center h-[600px] '>
        <div className=' flex-1  border-r-2 h-2/3 p-4'>
            <img src="https://haberulasim.com/wp-content/uploads/2023/08/Basliksiz-1.jpg" alt="companyImg" className=' hover:shadow-xl transition-all rounded'/>
        </div>

        <div className=' flex-1 p-4  h-full flex justify-start items-center'>
            <div className=' flex flex-col w-full gap-5'>

                <div className=' border-b w-full'>
                    <p className=' font-bold'>Firma Adı: </p>
                    <p className=' text-lg'>Kamilkoç</p>
                </div>

                <div className='border-b w-full '>
                    <p className='font-bold'>Firma Özet: </p>
                    <p>Türkiye’nin lider karayolu yolcu taşımacılığı şirketi, Avrupa’nın FlixBus’ı ile güçlerini birleştirerek, sizlere konforlu ve teknolojik açıdan gelişmiş, eşsiz bir seyahat deneyimi sunuyor. Kamil Koç'un 1926'dan beri Türkiye'deki köklü varlığı, FlixBus'ın Avrupa'daki geniş ulaşım ağıyla birleşince, seyahat imkanları artık sınır tanımıyor. </p>
                </div>

                <div className=' flex justify-center mt-20 w-full mx-auto '>
                    <button onClick={() => navigate("/sefer")} className=' bg-darkBlue text-white p-2 rounded w-56 hover:bg-blue transition-all'>Bilet Satın Al</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CompanyPage