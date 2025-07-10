import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { tokenMap } from "../tokenMap";

const steps = {
  1: "Benvenuto nel primo indizio! Guarda attentamente attorno a te...",
  2: "Secondo indizio! Hai trovato la maglietta giusta.",
  3: "Ultimo indizio! Sei vicino alla soluzione.",
  4: "Complimenti, hai completato il percorso degli indizi!"
};

export default function Deal() {
  const { step } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("t");
  const validToken = tokenMap[`deal/${step}`] === token;
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-white-600">INDIZIO</h1>
      <p className="mt-4 text-3xl">
        {validToken ? steps[step] || "Indizio non trovato." : "QR non valido. Acquista la maglietta per accedere."}
      </p>
    </div>
  );
}