// pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="container  text-center mx-auto p-4 sm:p-6 ">
      {/* Hero Section */}
      <div className="relative flex h-64 sm:h-96 overflow-hidden rounded-2xl mb-6 p-4  flex-col justify-center items-center shadow-xl">
        <div>
          <img
            src="../public/Pension-Kuri.jpeg"
            alt="Pension Kuri in Herbolzheim"
            className="max-w-full max-h-full object-contain border-sky-300 border-4 rounded-2xl"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex justify-center items-center text-center mt-6">
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700">
          Ihr Zuhause fernab der Heimat. <br /> Erleben Sie die herzliche
          Gastfreundschaft unseres Hauses, eingebettet in die idyllische
          Landschaft des Breisgaus.
          <br /> Egal ob Wanderer, Radfahrer oder Erholungssuchende – lassen Sie
          den Alltag hinter sich und genießen Sie unvergessliche Tage voller
          Ruhe, Komfort und Naturverbundenheit.
          <br /> Bei uns finden Sie den perfekten Ort zum Entspannen und
          Auftanken.
        </p>
      </div>
      {/* Additional Content Section */}
      {/* <div className="text-center mt-6">
    <p className="text-base sm:text-lg text-gray-700">
      Erleben Sie Gastfreundschaft und Komfort in bester Lage. Ideal für
      Wanderer, Radfahrer und Erholungssuchende, die die Schönheit des Breisgaus
      entdecken möchten.
    </p>
  </div> */}
    </div>
  );
}

export default Home;
