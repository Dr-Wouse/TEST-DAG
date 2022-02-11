/* eslint-disable react/no-unescaped-entities */
import React from "react";
import dayjs from "dayjs";

const Classement = () => {
  const classement = [
    {
      participant: "Damien Da Silva Bregieiro",
      dateDepart: 1643724000,
      dateArrivee: 1643725713,
    },
    {
      participant: "Thomas Ponthoreau",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
    },
    {
      participant: "Guillem Dardill",
      dateDepart: 1643724000,
      dateArrivee: 1643726269,
    },
    {
      participant: "Amadou NDIAYE",
      dateDepart: 1643724000,
      dateArrivee: 1643724564,
    },
    {
      participant: "Pierre Bague",
      dateDepart: 1643732114,
      dateArrivee: 1643733782,
    },
    {
      participant: "Hugo Prea",
      dateDepart: 1643724000,
      dateArrivee: 1643730981,
    },
    {
      participant: "Jean-Luc Roux",
      dateDepart: 1643724000,
      dateArrivee: 1643726134,
    },
    {
      participant: "Tony Bernard",
      dateDepart: 1643724000,
      dateArrivee: 1643725967,
    },
    {
      participant: "Serge Munnia-Vincent",
      dateDepart: 1643724000,
      dateArrivee: 1643867841,
    },
    {
      participant: "Camille Constant",
      dateDepart: 1643724000,
      dateArrivee: 1643725429,
    },
  ];

  // const formatTime = (timestamp) => {
  //   let date = new Date(timestamp * 1000);
  //   return `Année : ${date.getFullYear()}
  //   Mois : ${date.getMonth()}
  //   Jours : ${date.getDate()}`;
  // };

  const newFormatTime = (timestamp) => {
    var newDate = new Date();
    newDate.setTime(timestamp * 1000);
    return newDate.toUTCString();
  };

  console.log(newFormatTime(classement[0].dateDepart));

  return (
    <div>
      <h1 className="font-bold underline text-xl">CLASSEMENT: </h1>
      <br />
      <ul>
        {classement
          .sort((a, b) => {
            return (
              a.dateArrivee - b.dateArrivee - (a.dateDepart - b.dateDepart)
            );
          })
          .map((person, index) => {
            let indexPosition = index + 1;
            return (
              <div key={person.participant}>
                <p className="font-bold">Position : {indexPosition}</p>
                <div className="ml-10 mt-1">
                  <li>
                    <b>Nom :</b> {person.participant}
                  </li>
                  <li>
                    <b>Date de Départ : </b>
                    {dayjs(newFormatTime(person.dateDepart)).format(
                      "mm"
                    )} m {dayjs(newFormatTime(person.dateDepart)).format("ss")}{" "}
                    s{" "}
                  </li>
                  <li>
                    <b>Date d'arrivée : </b>
                    {dayjs(newFormatTime(person.dateArrivee)).format(
                      "mm"
                    )} m {dayjs(newFormatTime(person.dateArrivee)).format("ss")}{" "}
                    s{" "}
                  </li>
                  <li>
                    <b>Temps : </b>
                    {dayjs(
                      newFormatTime(person.dateArrivee - person.dateDepart)
                    ).format("mm")}{" "}
                    m{" "}
                    {dayjs(
                      newFormatTime(person.dateArrivee - person.dateDepart)
                    ).format("ss")}{" "}s
                  </li>
                  <br></br>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Classement;
