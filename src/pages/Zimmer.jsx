// pages/Zimmer.jsx
import React from 'react';

function Zimmer() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
        Unsere Zimmer
      </h1>
      <p className="text-gray-700 text-sm sm:text-base">
        Erfahren Sie mehr über unsere komfortablen Zimmer und finden Sie das
        passende Angebot für Ihren Aufenthalt.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {/* Beispiel für Zimmerkarte */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="zimmer1.jpg"
            alt="Zimmer 1"
            className="w-full h-32 sm:h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">Doppelzimmer</h2>
            <p className="text-gray-600 text-sm">
              Ein gemütliches Zimmer für zwei Personen mit schönem Ausblick.
            </p>
          </div>
        </div>
        {/* Weitere Zimmerkarten können hier hinzugefügt werden */}
      </div>
    </div>
  );
}

export default Zimmer;
