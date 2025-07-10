import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { tokenMap } from "../tokenMap";

const steps = {
  1: "Codice binario: 01001000 01101001! Traduci e trova il prossimo QR...",
  2: "Bravo! Adesso risolvi questo codice morse: .-.. --- ...- .",
  3: "Finale! Hai decifrato tutti i codici!",
  4: "Hai completato anche il percorso Codice Nerd! Sei un genio."
};

export default function Code() {
  const { step } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("t");
  const validToken = tokenMap['code/${step}'] === token;
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-white-600">CODICE NERD</h1>
      <p className="mt-4 text-3xl">
        {validToken ? steps[step] || "Codice non trovato." : "QR non valido. Acquista la maglietta per accedere."}
        </p>
    </div>
  );
}