import React from 'react'
import { useState } from 'react';

const indianCities = {
    "Andhra Pradesh": ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang", "Ziro"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Bhilai"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Hisar"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Manipur": ["Imphal", "Thoubal", "Kakching", "Bishnupur"],
    "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Saiha"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
    "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Khowai"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol"]
  };
  

//   console.log(Object.values(indianCities["Assam"]))

  


export default function OptionsQuestions() {

    const [state, setState] = useState(null);

    const setStateHandler = (e) => {
        setState(e.target.value)
    
    }

    console.log(indianCities[state])


  return (
    <div>
        <select onChange={setStateHandler} defaultValue="default">
            <option value="default"  disabled>Select State</option>
            {Object.keys(indianCities).map((state, index) => <option value={state} key={index}>{state}</option>)}
        </select>

        <select>
            {state!=null ? indianCities[state].map((city,index) => <option value={city} key={index}>{city}</option>) : <option>Select City</option>}
        </select>

    </div>
  )
}
