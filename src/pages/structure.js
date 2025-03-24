import React from "react";
import "../styles/structure.css"; // Importing external CSS

const people = [
  {
    name: "Narendra Modi",
    role: "Prime Minister of India",
    image: "./images/DDG412.png",
  },
  {
    name: "Shivaraj Singh Chouhan",
    role: "Minister of Agriculture and Farmers' Welfare",
    image: "./images/DDG32.png",
  },
  {
    name: "Dr. Himanshu Pathak, Secretary (DARE)",
    role: "Director General (ICAR)",
    image: "./images/DG1.png",
  },
  {
    name: "Dr Tilak Raj Sharma",
    role: "Deputy Director General (Crop Science)",
    image: "./images/DDG.png",
  },
  {
    name: "Dr (Mrs) C Tara Satyavathi",
    role: "Director of IIMR (Rajendra Nagar, Hyderabad)",
    image: "./images/director.png",
  },
];

const PeopleList = () => {
  return (
    <div className="container">
      {people.map((person, index) => (
        <div className="person" key={index}>
          <img src={person.image} alt={person.name} />
          <div className="bio-content">
            <h3 className="heading-about">{person.name}</h3>
            <p>{person.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
