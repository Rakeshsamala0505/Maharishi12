import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as WorldSVG } from '../assets/world.svg';
import './WorldMapSection.css';

const countryData = {
  AR: { name: 'Argentina', millets: 'Proso or Common millet, Sorghum', institutions: ['National Agricultural Technology Institute (INTA)','National University of Cordoba'] },
  AU: { name: 'Australia', millets: 'Native millet (Panicum decompositum),Channel millet (Echinochloa turneriana), Shirohie or Japanese millet', institutions: ['Australian Research for International Agricultural Research','Grain Research and Development Corporation','University Of Queensland','University of Sydney'] },
  CN: { name: 'China', millets: 'Foxtail millet, Common Millet, Sorghum, Coix, Quinoa ', institutions: ['     Hebei Academy of Agriculture and Forestry Sciences (Research Institute of Millet)','     Chinese Academy of Agricultural Sciences (CAAS)']},
  JP: { name: 'Japan', millets: 'Barnyard Millet, Barley, Amaranth, Fox tail, Black Rice, Red Rice, Ragi, Soba, Sorghum,', institutions: ['Japan Millet Association','JIRCAS'] },
  KR: { name: 'Republic of Korea', millets: 'foxtail and broomcorn varieties', institutions: ['NILL'] },
  MX: { name: 'Mexico', millets: 'Proso Millet, Foxtail Millet, Kodo millet', institutions: ['National Institute for Forestry, Agriculture and Livestock Research (INIFAP)','USA','Minister of Economy of the State of Tamaulipas']  },
  RU: { name: 'Russian Federation', millets: 'Major millets, Teff, Job’s Tears and Buckwheat ', institutions: ['Federal Scientific Center of Legumes and Groat Crops'] },
  SA: { name: 'Saudi Arabia', millets: 'Pearl Millet, Foxtail millet, Proso Millet, Little millet', institutions: ['NILL'] },
  ZA: { name: 'South Africa', millets: 'Sorghum, Finger millet, Pearl Millet', institutions: ['African Centre for Crop Improvement (ACCI)','University of KwaZulu-Natal'] },
  TR: { name: 'Türkiye', millets: 'Local Varieties of Sorghum (Vulgare, Sand, Djin)', institutions: ['NILL'] },
  US: { name: 'US', millets: 'Sorghum, Kodo Millet, Amarnath, Farro, Teff, Buckwheat, Spelt', institutions: ['Sorghum United','North American Millets Alliance (NAMA)'] },
  NE: { name: 'Niger', millets: 'Pearl Millet, Finger Millet', institutions: ['ICRISAT Sahelian Centre',' Forum for Agricultural Research in Africa (FARA)',' Council for Agricultural Research and Development (CORAF)',' Food, Agriculture and Natural Resources Policy Analysis Network (FANRPAN)',' Asia-Pacific Association of Agricultural Research Institutions (APAARI)'] },
  NG: { name: 'Nigeria', millets: 'Pearl Millet,Finger Millet,Kodo Millet', institutions: [' Food and Agriculture Organization of the United Nations (FAO)',' Federal Ministry of Agriculture and Rural Development (FMARD)',' Lake Chad Research Institute (LCRI)',' Lake Chad Research Institute',' Harvest Plus'] },
  SD: { name: 'Sudan', millets: 'Pearl Millet,Finger Millet,Foxtail Millet,Proso Millet, Kodo Millet,Little Millet', institutions: ['Sorghum and Millet Compact of Technologies for African Agricultural Transformation (TAAT)',' Food and Agriculture Organization of the United Nations (FAO)'] },
  ML: { name: 'Mali', millets: 'Pearl Millet, Finger Millet', institutions: ['International Crops Research Institute for the Semi-Arid Tropics'] },
  SN: { name: 'Senegal', millets: 'Foxtail Millet,Kodo Millet,Liitle Millet,Finger Millet,Coxi Millet', institutions: [' Senegalese Institute of Agricultural Research (ISRA) ',' International Maize and Wheat Improvement Centre (CIMMYT)'] },
  ET: { name: 'Ethiopia', millets: 'Teff,Finger Millet,Perl Millet,Foxtail,Sorghum', institutions: ['Ethiopian Institute of Agricultural Research (EIAR)',' ICRISAT',' Melkasa Agricultural Research Center of EIAR','GIZ, Germany Funded','Ambo University'] },
  BF: { name: 'Burkina Faso', millets: 'Pearl Millet, Sorghum Millet', institutions: ['Nill'] },
  TD: { name: 'Chad', millets: 'Sourghum', institutions: ['  Lake Chad Research Institute',' Swiss Agency for Development and Cooperation (SDC)','Agence Française de Development (AFD)'] },
  NP: { name: 'Nepal', millets: 'Bristy Foxtail Millet,Brown Tap Millet', institutions: ['Nill'] },
  PK: { name: 'Pakistan', millets: 'Kodo Millet,Foxtail Millet,Barnyard Millet,Browntop Millet,Little Millet', institutions: ['Under FAO Project'] },
  GN: { name: 'Guinea', millets: 'Pearl Millet,Kodo Millet,Finger Millet,Sorghum Millet', institutions: ['ICRISAT'] },
  GH: { name: 'Ghana', millets: 'Pearl Millet,Finger Millet', institutions: ['Nill'] },
  MM: { name: 'Myanmar', millets: 'Little Millet,Pearl Millet', institutions: ['Not Data Available','Dependent on ICRISAT'] },
  UG: { name: 'Uganda', millets: 'Kaguma,Ajuko Manyige,Kal Atar,Okello Chiba (All comes under Finger Millet)', institutions: ['National Semi-Arid Resources Research Institute (NaSARRI)','East African Center of Innovation for Finger Millet and Sorghum (CIFMS)'] },
  UA: { name: 'Ukraine', millets: 'Poso Millet,Finger Millet,Pearl Millet,Kodo Millet,Jowar', institutions: ['The Plant Production Institute'] },
  UZ: { name: 'Uzbekistan', millets: 'Proso Millet', institutions: ['Nill'] },
  KE: { name: 'Kenya', millets: 'Pearl Millet,Foxtail Millet,Foxtail Millet,Finger Millet', institutions: ['International Crops Research Institute for the Semi-Arid Tropics (ICRISAT)'] },
  ZW: { name: 'Zimbabwe', millets: 'Finger Millet,Pearl Miller, Bulrush Millet,Red Gram Millet and White Millet Sorghum', institutions: ['ICRISAT, Crop Breeding Institute (CBI)'] },
  YE: { name: 'Yemen', millets: 'Sorghum', institutions: ['Nil'] },
  NA: { name: 'Namibia', millets: 'Pearl Millet', institutions: [' Namibian Agronomic Board (NAB),Republic of Namibia','Republic of Namibia'] },
  MW: { name: 'Malawi', millets: 'Finger Millet,Pearl Millet', institutions: ['Nill'] },
  GM: { name: 'Gambia', millets: 'Pearl Millet', institutions: ['Nill'] },
  AO: { name: 'Angola', millets: 'Pearl Millet', institutions: ['Nill'] },
  GW: { name: 'Guinea-Bissau', millets: 'Fonio', institutions: ['Nill'] },
  TG: { name: 'Togo', millets: 'Fonio', institutions: ['Togolese Agricultural Research Institute (ITRA)'] },
  ZM: { name: 'Zambia', millets: 'Sourghum Millet,Pearl Millet', institutions: ['Zambia Agriculture Research Institute (ZARI)','University of Zambia','National Plant Genetic Resources Centre (NPGRC)','Ministry of Agriculture'] },
  BD: { name: 'Bangladesh', millets: 'Nill', institutions: ['The Bangladesh Council of Scientific and Industrial Research (BCSIR) has conducted research on millets in collaboration with the Institute of Food Science and Technology (IFST)'] },
  LK: { name: 'Sri Lanka', millets: 'Nill', institutions: ['Under FAO Project','Field Crops Research and Development Institute (FCRDI), Mahailuppallama'] },
  BW: { name: 'Botswana', millets: 'Pearl Millet,Finger Millet,Foxtail Millet Sorghum', institutions: ['National Agricultural Research and Development Institute'] },
  CH: { name: 'Switzerland', millets: 'Nill', institutions: ['University of Bern – Institute of Plant Sciences','Agroscope','SWISSAID'] },
  BT: { name: 'Bhutan', millets: 'Finger Millet, Foxtail Millet, Common Millet', institutions: [' Agriculture Research Development Centre (ARDC) Bajo',' College of Natural Resources'] },
  IN: { name: 'India', millets: 'Sorghum, Pearl Millet, Finger Millet, Foxtail Millet, Kodo Millet, Little Millet, Barnyard Millet,  Proso Millet, Browntop Millet', institutions: ['ICAR- Indian Institute of Millet  Research','ICRISAT'] },
};

const highlightedCountries = Object.keys(countryData);

const WorldMapSection = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const infoBoxRef = useRef(null);

  useEffect(() => {
    const svg = document.querySelector('.world-map');

    if (svg) {
      highlightedCountries.forEach((countryId) => {
        const path = svg.getElementById(countryId);
        if (path) {
          path.classList.add('highlighted-country');

          // Add click event for opening info box
          path.addEventListener('click', () => {
            setSelectedCountry(countryData[countryId]);
          });

          // Optional: Remove previous listeners if needed (avoid duplication if you hot reload)
        }
      });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoBoxRef.current && !infoBoxRef.current.contains(event.target)) {
        setSelectedCountry(null);
      }
    };
    if (selectedCountry) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCountry]);

  const handleClose = () => setSelectedCountry(null);

  return (
    <div className="map-section">
          <h2 className="map-title">Millets Around the World</h2>
      <div className="map-container">
        <WorldSVG className="world-map" />
      </div>

      {selectedCountry && (
  <div className="info-box" ref={infoBoxRef}>
    <button className="close-btn" onClick={handleClose}>×</button>
    <h2>{selectedCountry.name}</h2>

    <div className="info-section">
      <h4>Millets:</h4>
      <p>
        {selectedCountry.millets && selectedCountry.millets.trim() !== ''
          ? selectedCountry.millets
          : 'Information coming soon...'}
      </p>
    </div>

    <div className="info-section">
      <h4>Institutions:</h4>
      {selectedCountry.institutions.length > 0 ? (
        <ol>
          {selectedCountry.institutions.map((inst, index) => (
            <li key={index}>{inst}</li>
          ))}
        </ol>
      ) : (
        <p>Information coming soon...</p>
      )}
    </div>
  </div>
)}

    </div>
  );
};

export default WorldMapSection;
