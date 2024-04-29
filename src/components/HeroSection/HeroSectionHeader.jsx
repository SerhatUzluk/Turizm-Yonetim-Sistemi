import React from "react";

const HeroSectionHeader = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-4  rounded-xl my-8 shadow-xl">
      <div>
        <h2 className=" font-gemunu text-6xl font-bold">SMR ile Güvenli Yolculuk</h2>
      </div>

      <div className=" text-center font-semibold w-1/2">
        <p>
          Yeni nesil seyahat deneyimi için tasarlanmış platformumuz, kullanıcılarına kolaylık, güvenilirlik ve esneklik sunuyor. Her türden seyahat ihtiyacınızı karşılamak için geniş bir seçenek yelpazesi sunarken, kişiselleştirilmiş önerilerle size en uygun seçenekleri sunuyoruz. Güvenli ödeme sistemimiz ve 7/24 müşteri desteği ile seyahat planlarınızı kolayca gerçekleştirebilir, unutulmaz anlar yaşamak için yeni maceralara yelken açabilirsiniz. Hayalinizdeki seyahati keşfetmek için bize katılın!
        </p>
      </div>
    </div>
  );
};

export default HeroSectionHeader;
