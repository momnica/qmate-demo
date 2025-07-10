import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { tokenMap } from "../tokenMap";

const steps = {
  1: "Hai ricevuto un messaggio criptato... Riuscirai a decifrarlo?",
  2: "Secondo frammento trovato. Serve ancora una maglietta...",
  3: "Messaggio completo! Missione compiuta!",
  4: "Tutto svelato! Sei un vero agente segreto."
};

export default function Secret() {
  const { step } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("t");
  const validToken = tokenMap['secret/${step}'] === token;
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-white-600">MESSAGGIO SEGRETO</h1>
      <p className="mt-4 text-3xl">
        {validToken ? steps[step] || "Messaggio non trovato." : "QR non valido. Acquista la maglietta per accedere."}
      </p>
    </div>
  );
}
