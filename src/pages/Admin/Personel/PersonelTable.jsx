import React from 'react'
import { useNavigate } from 'react-router-dom'

const PersonelTable = () => {

    const navigate = useNavigate();


  return (
    <section class="container mx-auto p-6 font-mono h-[570px]">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div class="w-full overflow-x-auto">
            <table class="w-full">
                <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th class="px-4 py-3">İsim</th>
                    <th class="px-4 py-3">Telefon No</th>
                    <th class="px-4 py-3">Ünvan</th>
                    <th class="px-4 py-3">Mail Adresi</th>
                    <th class="px-4 py-3">İşlemler</th>
                </tr>
                </thead>
                <tbody class="bg-white">
                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold text-black">John</p>
                        <p class="text-xs text-gray-600">Doe</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">5541112222</td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Admin </span>
                    </td>
                    <td class="px-4 py-3 text-sm border">abc@gmail.com</td>
                    <td class="px-4 py-3 text-sm border">
                        <div className=' flex justify-center items-center gap-5'>
                            <button onClick={() => navigate("/personel-düzenle")} className=' border bg-blue w-20 hover:bg-darkBlue transition-all text-white p-1 rounded'>Düzenle</button>
                            <button className=' border bg-red w-20 text-white p-1 hover:bg-rose-700 transition-all rounded'>Sil</button>
                        </div>
                    </td>
                </tr>

                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold text-black">John</p>
                        <p class="text-xs text-gray-600">Doe</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">5541112222</td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Admin </span>
                    </td>
                    <td class="px-4 py-3 text-sm border">abc@gmail.com</td>
                    <td class="px-4 py-3 text-sm border">
                        <div className=' flex justify-center items-center gap-5'>
                            <button className=' border bg-blue w-20 hover:bg-darkBlue transition-all text-white p-1 rounded'>Düzenle</button>
                            <button className=' border bg-red w-20 text-white p-1 hover:bg-rose-700 transition-all rounded'>Sil</button>
                        </div>
                    </td>
                </tr>

                <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                        <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                        <p class="font-semibold text-black">John</p>
                        <p class="text-xs text-gray-600">Doe</p>
                        </div>
                    </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">5541112222</td>
                    <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Admin </span>
                    </td>
                    <td class="px-4 py-3 text-sm border">abc@gmail.com</td>
                    <td class="px-4 py-3 text-sm border">
                        <div className=' flex justify-center items-center gap-5'>
                            <button className=' border bg-blue w-20 hover:bg-darkBlue transition-all text-white p-1 rounded'>Düzenle</button>
                            <button className=' border bg-red w-20 text-white p-1 hover:bg-rose-700 transition-all rounded'>Sil</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
  )
}

export default PersonelTable