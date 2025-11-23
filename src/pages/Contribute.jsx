export default function Search() {
    return (
        <section
            style={{
                padding: "1.5rem",
                lineHeight: "1.6",
                border: "1px solid #ccc",
                borderRadius: "12px",        // abgerundete Ecken
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // leichter Schatten
                backgroundColor: "#f9f9f9",  // dezenter Hintergrund
                width: "90%",
                margin: "1rem auto"          // zentriert mit Abstand
            }}
        >
            <h2>🔍 Suche nach Wassertests</h2>
            <p>
                Hier kannst du nach bestehenden Wassertests in deiner Umgebung suchen – etwa zu pH-Wert,
                Nitratbelastung oder mikrobiologischer Qualität. Die Daten stammen aus öffentlichen Quellen
                und von engagierten Bürger*innen.
            </p>
            <h3>🌱 Deine Beteiligung in Zukunft</h3>
            <p>
                In einer kommenden Version wirst du selbst zur Wasserforschung beitragen können! Mit einfachen
                Testkits oder digitalen Tools kannst du eigene Messwerte erfassen und hochladen – direkt aus
                deinem Garten, von deinem Lieblingssee oder aus dem Schulprojekt.
            </p>
            <ul>
                <li>📍 Regionale Wasserproben erfassen</li>
                <li>📊 Ergebnisse teilen und vergleichen</li>
                <li>🤝 Teil einer Community für sauberes Wasser werden</li>
            </ul>
            <p>
                So entsteht ein gemeinsames Netzwerk für Umweltbewusstsein, Forschung und Transparenz – von
                Bürger*innen für Bürger*innen.
            </p>
            <p style={{ fontStyle: "italic", color: "#555" }}>
                Bleib dran – bald kannst du selbst mitmachen und die Wasserqualität aktiv mitgestalten!
            </p>
        </section>
    );
}
