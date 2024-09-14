// pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-96 overflow-hidden rounded-lg shadow-lg mb-6">
        <img
          src="../public/Pension-Kuri.jpeg" // Passe den Pfad zum Bild an
          alt="Pension Kuri in Herbolzheim"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Willkommen in der Pension Kuri
          </h1>
        </div>
      </div>
      {/* Text Section */}
      <div className="text-center mt-6">
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-700">
          Ihr Zuhause fernab der Heimat. Erleben Sie die herzliche
          Gastfreundschaft unseres Hauses, eingebettet in die idyllische
          Landschaft des Breisgaus. Egal ob Wanderer, Radfahrer oder
          Erholungssuchende – lassen Sie den Alltag hinter sich und genießen Sie
          unvergessliche Tage voller Ruhe, Komfort und Naturverbundenheit. Bei
          uns finden Sie den perfekten Ort zum Entspannen und Auftanken.
        </p>
      </div>
      {/*  {/* Additional Content Section */}
      {/*  <div className="text-center mt-6">
        <p className="text-base sm:text-lg text-gray-700">
          Erleben Sie Gastfreundschaft und Komfort in bester Lage. Ideal für
          Wanderer, Radfahrer und Erholungssuchende, die die Schönheit des
          Breisgaus entdecken möchten.
        </p>
      </div> */}
    </div>
  );
}

export default Home;
