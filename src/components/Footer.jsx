// components/Footer.jsx
import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    // Skript für TripAdvisor-Widget laden
    const scriptTripAdvisor = document.createElement('script');
    scriptTripAdvisor.src =
      'https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&uniq=279&locationId=7060704&lang=de&border=true&shadow=true&backgroundColor=white&display_version=2';
    scriptTripAdvisor.async = true;
    scriptTripAdvisor.onload = () => {
      scriptTripAdvisor.setAttribute('data-loadtrk', true);
    };
    document
      .getElementById('tripadvisor-widget')
      .appendChild(scriptTripAdvisor);

    // Skript für HolidayCheck-Widget laden
    const scriptHolidayCheck = document.createElement('script');
    scriptHolidayCheck.src =
      'https://www.holidaycheck.de/widgets?step=code&type=code&options=hotel-1-1218672-de_DE-s-w-1-1---0';
    scriptHolidayCheck.type = 'text/javascript';
    scriptHolidayCheck.async = true;
    document
      .getElementById('holidaycheck-widget')
      .appendChild(scriptHolidayCheck);

    // Skript für Elfsight Google-Bewertungs-Widget laden
    const scriptElfsight = document.createElement('script');
    scriptElfsight.src = 'https://static.elfsight.com/platform/platform.js';
    scriptElfsight.setAttribute('data-use-service-core', '');
    scriptElfsight.defer = true;
    document.body.appendChild(scriptElfsight);
  }, []);

  // Funktion zum Öffnen des TripAdvisor-Links
  const openTripAdvisor = () => {
    window.open(
      'https://www.tripadvisor.de/Hotel_Review-g641887-d7060704-Reviews-Pension_Kuri-Herbolzheim_Baden_Wurttemberg.html',
      '_blank'
    );
  };

  return (
    <footer className="bg-white text-violet-500 p-4 sm:p-6 shadow-xl rounded">
      <div className="container mx-auto text-center shadow-2xl roundend">
        <p className="text-xs sm:text-sm">
          &copy; 2024 Pension Kuri. Alle Rechte vorbehalten.
        </p>
        <p className="text-xs sm:text-sm">
          Adresse: Musterstraße 123, 12345 Musterstadt
        </p>
        <p className="text-xs sm:text-sm">
          Telefon: +49 123 4567890 | E-Mail: info@pension-kuri.de
        </p>

        {/* Bewertungsbereich */}
        <div className="mt-4 sm:mt-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Unsere Bewertungen
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Google Bewertungen Widget von Elfsight */}
            <div
              className="bg-white text-gray-800 rounded-lg p-4 flex flex-col items-center justify-center shadow-md w-64 border border-gray-200"
              role="button"
              tabIndex={0}
            >
              <div
                className="elfsight-app-2c73ae66-8a71-4f09-9355-4c7ad3d63381"
                data-elfsight-app-lazy
              ></div>
            </div>

            {/* TripAdvisor Bewertung mit Sterneanzeige und anklickbarem Bereich */}
            <div
              id="tripadvisor-widget"
              className="bg-white text-gray-800 rounded-lg p-4 flex flex-col items-center justify-center shadow-md w-64 border border-gray-200 cursor-pointer"
              onClick={openTripAdvisor}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openTripAdvisor()}
            >
              <div
                id="TA_cdsratingsonlynarrow279"
                className="TA_cdsratingsonlynarrow"
              >
                <ul
                  id="BeJRkvFrGkWn"
                  className="TA_links l9WL11L2"
                >
                  <li
                    id="owOJPE70"
                    className="OSZM3nFA"
                  >
                    <img
                      src="https://www.tripadvisor.de/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
                      alt="TripAdvisor"
                      className="w-40 mx-auto mb-2"
                    />
                  </li>
                </ul>
              </div>
            </div>

            {/* HolidayCheck Bewertung passend integriert */}
            <div
              id="holidaycheck-widget"
              className=" bg-white text-gray-800 rounded-lg p-4 flex flex-col items-center justify-center shadow-md w-64 border border-gray-200"
              role="button"
              tabIndex={0}
            >
              <div id="holidaycheck-widget-hotel-1-1218672-de_DE-s-w-1-1---0">
                <div
                  id="holidaycheck_widget_placeholder-1218672"
                  style={{
                    width: '120px',
                    padding: '5px',
                    background: '#0058a2',
                  }}
                >
                  <a
                    href="https://www.holidaycheck.de/hi/pension-kuri/56ea9a85-efbe-3c38-90b5-f39f1b5d90f4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Hotels mit Hotelbewertungen bei HolidayCheck"
                      src="https://www.holidaycheck.de/widgets/logo_xlarge.png"
                      border="0"
                      className="w-24"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
