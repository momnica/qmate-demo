import React, { useState, useEffect } from "react";


export default function QMateDemo() {
  const [view, setView] = useState("home");
  const [code, setCode] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [showSecret, setShowSecret] = useState(false);

  const handleSecretCheck = () => {
    if (secretKey.toLowerCase().trim() === "librogiallo") {
      setShowSecret(true);
    } else {
      setShowSecret(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00CFFF] to-[#96e0e8] flex flex-col items-center justify-center p-6 transition-all">
      <div className="text-center mb-6">
        <img src="/logo.png" alt="Logo" className="w-48 md:w-64 mx-auto" />
      </div>

      <div className="bg-[#5988c2] border-fuchsia-700 rounded-2xl shadow-xl max-w-xl w-full p-12 space-y-8 transition-all">
        {view === "home" && (
          <div className="space-y-4 text-center">
            <p className="text-lg font-medium">Scegli un QR simulato da aprire:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="btn" onClick={() => setView("indizio")}>🔍 Indizio</button>
              <button className="btn" onClick={() => setView("codenerd")}>💻 Codice Nerd</button>
              <button className="btn" onClick={() => setView("segreto")}>💌 Messaggio Segreto</button>
            </div>
          </div>
        )}

        {view === "indizio" && (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold text-brand-yellow">🔍 Indizio</h2>
            <p><strong>Parte 2 di 5:</strong> La chiave è nel cielo. Ma guarda giù.</p>
            <button className="btn-outline" onClick={() => setView("home")}>⬅️ Torna</button>
          </div>
        )}

        {view === "codenerd" && (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold text-brand-yellow">💻 Codice Nerd</h2>
            <p>Frammento di codice HTML:</p>
            <pre className="bg-gray-800 p-4 rounded text-sm overflow-auto text-left">
{`<div class="box">
  <p>Ciao Mondo</p>
</div>`}
            </pre>
            <button className="btn-outline" onClick={() => setView("home")}>⬅️ Torna</button>
          </div>
        )}

        {view === "segreto" && (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold text-brand-yellow">💌 Messaggio Segreto</h2>
            {!showSecret ? (
              <div className="space-y-2">
                <p>Inserisci la parola segreta:</p>
                <input
                  className="input"
                  placeholder="Parola segreta..."
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                />
                <button className="btn" onClick={handleSecretCheck}>🔓 Sblocca</button>
              </div>
            ) : (
              <div className="bg-green-800 text-green-100 p-4 rounded shadow-inner">
                <p><strong>Messaggio per Monica:</strong></p>
                <p>Ci vediamo stasera alle 19:30. Non dimenticare il libro giallo 😉</p>
              </div>
            )}
            <button className="btn-outline" onClick={() => setView("home")}>⬅️ Torna</button>
          </div>
        )}
      </div>

      <div className="text-center text-sm mt-6 tracking-wide font-extrabold text-white font-play">
        PLAY & FUN!
      </div>
    </div>
  );
}
