import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-white p-3">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded-xl bg-blue font-gemunu text-2xl">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          İletişim
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Bir sorununuz mu var? Bildirmek istediğiniz konular mı var? Bize bildirin.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500
               focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Emailinizi girebilirsiniz."
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Konu
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm
               focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Bildirmek istediğiniz konuları yazabilirsiniz."
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Mesajınız
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300
               focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400
                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Bir Yorum bırakın..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-lightBlue sm:w-fit
            hover:bg-lightBlue focus:ring-4 focus:outline-none focus:ring-#7FC7D9 dark:bg-lightBlue
             dark:hover:bg-lightBlue dark:focus:ring-lightBlue"
          >
            Mesajı Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;