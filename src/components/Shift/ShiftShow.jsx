import React from "react";
import Table from "react-bootstrap/Table";
const ShiftShow = () => {
  return (
    <div className=" auto-rows justify-items-center border-solid bg-lightBlue m-10 rounded-xl font-gemunu  ">
      <Table striped="columns" className="border-solid border w-full h-96">
        <thead>
          <tr className="border-solid border-2">
            <th className="border-solid border-2">Tarih</th>
            <th className="border-solid border-2">ÜNVAN</th>
            <th className="border-solid border-2">AD SOYAD</th>
            <th className="border-solid border-2">GÖREVLER</th>
            <th className="border-solid border-2">Sil - Güncelle</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-solid border-2">
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              2024/08/03 <br /> 08:00 - 16:00
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              ADMİN
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Mark
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Otto
            </td>
            <td className="border-solid border-2 text-center align-middle">
              <div>
                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md">
                  Güncelle
                </button>

                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md mx-2">
                  Sil
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-solid border-2">
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              2024/08/03 <br /> 08:00 - 16:00
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              PLANLAMA PERSONELİ
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Jacob
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Thornton
            </td>
            <td className="border-solid border-2 text-center align-middle">
            <div>
                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md">
                  Güncelle
                </button>

                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md mx-2">
                  Sil
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-solid border-2">
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              2024/08/03 <br /> 08:00 - 16:00
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              SATIŞ PERSONELİ
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Jacob
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Thornton
            </td>
            <td className="border-solid border-2 text-center align-middle">
            <div>
                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md">
                  Güncelle
                </button>

                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md mx-2">
                  Sil
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-solid border-2">
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              2024/08/03 <br /> 08:00 - 16:00
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              OTOBÜS ŞOFÖR
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Jacob
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Thornton
            </td>
            <td className="border-solid border-2 text-center align-middle">
            <div>
            <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md">
                  Güncelle
                </button>

                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md mx-2">
                  Sil
                </button>
              </div>
            </td>
          </tr>
          <tr className="border-solid border-2">
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              2024/08/03 <br /> 08:00 - 16:00
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              OTOBÜS MUAVİNİ
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Jacob
            </td>
            <td className="border-solid border-2 text-center align-middle hover:bg-blue hover:text-white">
              Thornton
            </td>
            <td className="border-solid border-2 text-center align-middle">
            <div>
                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md">
                  Güncelle
                </button>

                <button className=" bg-blue hover:text-xl text-white h-10 w-14 rounded-md mx-2">
                  Sil
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="text-center align-middle h-16 m-5  ">
        <button className=" bg-blue hover:text-xl text-white h-10 w-28 rounded-xl">
          Vardiya Ekle
        </button>
      </div>
    </div>
  );
};

export default ShiftShow;
