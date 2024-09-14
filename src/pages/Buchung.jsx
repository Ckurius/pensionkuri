// pages/Buchung.jsx
import React from 'react';

function Buchung() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
        Buchung
      </h1>
      <p className="text-gray-700 text-sm sm:text-base">
        Füllen Sie das Formular aus, um eine Buchungsanfrage zu stellen.
      </p>
      <form className="mt-4 space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded text-sm"
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="w-full p-2 border border-gray-300 rounded text-sm"
        />
        <textarea
          placeholder="Nachricht"
          className="w-full p-2 border border-gray-300 rounded text-sm"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
        >
          Absenden
        </button>
      </form>
    </div>
  );
}

export default Buchung;
