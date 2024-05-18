import React from 'react'
import CustomerTicketPageItem from '../components/CustomerTicketPageItem';

const CustomerTicketPage = () => {
  return (
    <div className=' flex justify-center flex-col'>
        <div className=' flex flex-col justify-center items-center gap-2 border-b-2 bg-light py-8 w-1/2 mx-auto rounded-xl shadow-xl mt-4'>
            <h2 className=' font-bold font-gemunu text-3xl '>Canlı Bilet Satış</h2>
            <p>Yorumların bizim için önemli...</p>
        </div>

        <div className=' flex flex-wrap p-4 gap-10 justify-center items-center '>
          <CustomerTicketPageItem />
          <CustomerTicketPageItem />
          <CustomerTicketPageItem />
          <CustomerTicketPageItem />
          <CustomerTicketPageItem />
          <CustomerTicketPageItem />
        </div>
    </div>
  )
}

export default CustomerTicketPage;