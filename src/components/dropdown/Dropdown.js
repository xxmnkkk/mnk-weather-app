import React, { useRef } from "react";
import "./styles/dropdown.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setCityName,
  setDropDownDiv,
  setSearchedCityString,
} from "../../redux/reducer/weatherDataSlice";

const citiesList = {
  cities: [
    "Port Blair",
    "Faridabad",
    "Gurgaon",
    "Hisar",
    "Rohtak",
    "Panipat",
    "Karnal",
    "Sonipat",
    "Yamunanagar",
    "Panchkula",
    "Bhiwani",
    "Bahadurgarh",
    "Jind",
    "Sirsa",
    "Thanesar",
    "Kaithal",
    "Palwal",
    "Rewari",
    "Hansi",
    "Narnaul",
    "Fatehabad",
    "Gohana",
    "Tohana",
    "Narwana",
    "Mandi Dabwali",
    "Charkhi Dadri",
    "New Delhi",
    "Mumbai",
    "Shahbad",
    "Pehowa",
    "Samalkha",
    "Pinjore",
    "Ladwa",
    "Sohna",
    "Safidon",
    "Taraori",
    "Mahendragarh",
    "Ratia",
    "Rania",
    "Sarsod",
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Tirunelveli",
    "Tiruppur",
    "Ranipet",
    "Nagercoil",
    "Thanjavur",
    "Vellore",
    "Kancheepuram",
    "Erode",
    "Tiruvannamalai",
    "Pollachi",
    "Rajapalayam",
    "Sivakasi",
    "Pudukkottai",
    "Neyveli (TS)",
    "Nagapattinam",
    "Viluppuram",
    "Tiruchengode",
    "Vaniyambadi",
    "Theni Allinagaram",
    "Udhagamandalam",
    "Aruppukkottai",
    "Paramakudi",
    "Arakkonam",
    "Virudhachalam",
    "Srivilliputhur",
    "Tindivanam",
    "Virudhunagar",
    "Karur",
    "Valparai",
    "Sankarankovil",
    "Tenkasi",
    "Palani",
    "Pattukkottai",
    "Tirupathur",
    "Ramanathapuram",
    "Udumalaipettai",
    "Gobichettipalayam",
    "Thiruvarur",
    "Thiruvallur",
    "Panruti",
    "Namakkal",
    "Thirumangalam",
    "Vikramasingapuram",
    "Nellikuppam",
    "Rasipuram",
    "Tiruttani",
    "Nandivaram-Guduvancheri",
    "Periyakulam",
    "Pernampattu",
    "Vellakoil",
    "Sivaganga",
    "Vadalur",
    "Rameshwaram",
    "Tiruvethipuram",
    "Perambalur",
    "Usilampatti",
    "Vedaranyam",
    "Sathyamangalam",
    "Puliyankudi",
    "Nanjikottai",
    "Thuraiyur",
    "Sirkali",
    "Tiruchendur",
    "Periyasemur",
    "Sattur",
    "Vandavasi",
    "Tharamangalam",
    "Tirukkoyilur",
    "Oddanchatram",
    "Palladam",
    "Vadakkuvalliyur",
    "Tirukalukundram",
    "Uthamapalayam",
    "Surandai",
    "Sankari",
    "Shenkottai",
    "Vadipatti",
    "Sholingur",
    "Manachanallur",
    "Viswanatham",
    "Polur",
    "Panagudi",
    "Uthiramerur",
    "Thiruthuraipoondi",
    "Pallapatti",
    "Ponneri",
    "Lalgudi",
    "Natham",
    "Unnamalaikadai",
    "P.N.Patti",
    "Tharangambadi",
    "Tittakudi",
    "Pacode",
    "O' Valley",
    "Suriyampalayam",
    "Sholavandan",
    "Thammampatti",
    "Namagiripettai",
    "Peravurani",
    "Parangipettai",
    "Pudupattinam",
    "Pallikonda",
    "Sivagiri",
    "Punjaipugalur",
    "Padmanabhapuram",
    "Thirupuvanam",
    "Indore",
    "Bhopal",
    "Jabalpur",
    "Gwalior",
    "Ujjain",
    "Sagar",
    "Ratlam",
    "Satna",
    "Murwara (Katni)",
    "Morena",
    "Singrauli",
    "Rewa",
    "Vidisha",
    "Ganjbasoda",
    "Shivpuri",
    "Mandsaur",
    "Neemuch",
    "Nagda",
    "Itarsi",
    "Sarni",
    "Sehore",
    "Mhow Cantonment",
    "Seoni",
    "Balaghat",
    "Ashok Nagar",
    "Tikamgarh",
    "Shahdol",
    "Pithampur",
    "Alirajpur",
    "Mandla",
    "Sheopur",
    "Shajapur",
    "Panna",
    "Raghogarh-Vijaypur",
  ],
};

export default function Dropdown() {
  const weatherState = useSelector((state) => state.weatherDatastate);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const filteredCities = citiesList.cities.filter((city) => {
    return city
      .toLowerCase()
      .includes(weatherState?.searchedCityString.toLowerCase());
  });

  const handleButtonClick = () => {
    dispatch(setDropDownDiv(true));
    dispatch(setSearchedCityString(""));
  };

  const handleCityClick = (city) => {
    dispatch(setCityName(city));
    dispatch(setSearchedCityString(""));
    dispatch(setDropDownDiv(false));
  };

  const handleInputChange = (e) => {
    dispatch(setSearchedCityString(e.target.value));
  };

  return (
    <div className="dropdown-main-container">
      <div
        className="weather-dropdown-selector-container"
        onClick={handleButtonClick}
      >
        {weatherState?.cityName || "Select city"}
      </div>

      {weatherState?.dropDownDiv && (
        <div className="dropdown-container-layover" onClick={() => dispatch(setDropDownDiv(false))}>
          <div className="dropdown-container">
            <input
              name="text"
              placeholder="Search city"
              onChange={handleInputChange}
              ref={inputRef}
            />

            <div className="city-name-container">
              {(weatherState.searchedCityString
                ? filteredCities
                : citiesList.cities
              ).map((city, index) => (
                <div
                  key={index}
                  className="city-name"
                  onClick={() => handleCityClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
