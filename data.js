/*  TONI'S ARENA – Datendatei
    Diese Datei wird automatisch aktualisiert. Alle Zeiten als ISO mit Zeitzone.
    Neue Vereine / Events: einfach ein weiteres Objekt in "sections" ergänzen.  */
window.ARENA_DATA = {
  updated: "2026-11-19T07:00:00+01:00",
  owner: "Toni",
  sections: [
    {
      id: "bayern",
      name: "FC Bayern München",
      short: "FCB",
      kind: "football",
      tagline: "Mia san mia",
      colors: { primary: "#DC052D", secondary: "#0066B2", glow: "rgba(220,5,45,.35)" },
      status: [
        { label: "Bundesliga", value: "Platz 1", detail: "21 Pkt · 9 Spiele · +20" },
        { label: "Champions League", value: "8 Punkte", detail: "4 Spiele, ungeschlagen" },
        { label: "DFB-Pokal", value: "Achtelfinale", detail: "gegen Hertha BSC" }
      ],
      fixtures: [
        { start: "2026-11-20T20:30:00+01:00", comp: "Bundesliga · 10. Spieltag", home: "FC Bayern", away: "1. FC Köln", venue: "Allianz Arena", tv: ["Sky", "WOW"] },
        { start: "2026-11-25T21:00:00+01:00", comp: "Champions League · 5. Spieltag", home: "LOSC Lille", away: "FC Bayern", venue: "Stade Pierre-Mauroy", tv: ["DAZN"] },
        { start: "2026-11-28T15:30:00+01:00", comp: "Bundesliga · 11. Spieltag", home: "Hamburger SV", away: "FC Bayern", venue: "Volksparkstadion", tv: ["Sky (Einzelspiel)", "DAZN (Konferenz)"] },
        { start: "2026-12-01T20:45:00+01:00", comp: "DFB-Pokal · Achtelfinale", home: "FC Bayern", away: "Hertha BSC", venue: "Allianz Arena", tv: ["Sky", "RTL"] },
        { start: "2026-12-04T20:30:00+01:00", comp: "Bundesliga · 12. Spieltag", home: "FC Bayern", away: "SC Paderborn 07", venue: "Allianz Arena", tv: ["Sky"] },
        { start: "2026-12-08T21:00:00+01:00", comp: "Champions League · 6. Spieltag", home: "FC Bayern", away: "Slavia Prag", venue: "Allianz Arena", tv: ["Prime Video"] },
        { start: "2026-12-13T17:30:00+01:00", comp: "Bundesliga · 13. Spieltag", home: "TSG Hoffenheim", away: "FC Bayern", venue: "PreZero Arena", tv: ["DAZN"] },
        { start: "2026-12-18T20:30:00+01:00", comp: "Bundesliga · 14. Spieltag", home: "FC Bayern", away: "Werder Bremen", venue: "Allianz Arena", tv: ["Sky", "SAT.1"] }
      ],
      results: [
        { start: "2026-11-07T15:30:00+01:00", comp: "Bundesliga", home: "Mainz 05", away: "FC Bayern", score: "1:2", outcome: "S" },
        { start: "2026-11-03T21:00:00+01:00", comp: "Champions League", home: "Atlético Madrid", away: "FC Bayern", score: "0:2", outcome: "S" },
        { start: "2026-10-31T18:30:00+01:00", comp: "Bundesliga", home: "FC Bayern", away: "Borussia Dortmund", score: "2:2", outcome: "U" },
        { start: "2026-10-28T20:45:00+01:00", comp: "DFB-Pokal", home: "FC Bayern", away: "1. FC Magdeburg", score: "6:1", outcome: "S" },
        { start: "2026-10-25T17:30:00+01:00", comp: "Bundesliga", home: "SC Freiburg", away: "FC Bayern", score: "1:3", outcome: "S" }
      ],
      tables: [
        {
          title: "Bundesliga 2026/27 · nach dem 9. Spieltag",
          cols: ["Pkt", "Diff"],
          preview: 6,
          rows: [
            { pos: 1, name: "FC Bayern", v: [21, "+20"], me: true },
            { pos: 2, name: "Borussia Dortmund", v: [21, "+9"] },
            { pos: 3, name: "SC Freiburg", v: [19, "+10"] },
            { pos: 4, name: "RB Leipzig", v: [18, "+14"] },
            { pos: 5, name: "Bayer Leverkusen", v: [16, "+3"] },
            { pos: 6, name: "Werder Bremen", v: [15, "+2"] },
            { pos: 7, name: "SV Elversberg", v: [13, "-1"] },
            { pos: 8, name: "VfB Stuttgart", v: [12, "0"] },
            { pos: 9, name: "TSG Hoffenheim", v: [12, "-1"] },
            { pos: 10, name: "Eintracht Frankfurt", v: [12, "-5"] },
            { pos: 11, name: "Hamburger SV", v: [12, "-10"] },
            { pos: 12, name: "Mainz 05", v: [10, "-1"] },
            { pos: 13, name: "SC Paderborn", v: [10, "-3"] },
            { pos: 14, name: "FC Augsburg", v: [9, "0"] },
            { pos: 15, name: "1. FC Köln", v: [9, "-4"] },
            { pos: 16, name: "Union Berlin", v: [7, "-14"] },
            { pos: 17, name: "FC Schalke 04", v: [6, "-6"] },
            { pos: 18, name: "Mönchengladbach", v: [4, "-13"] }
          ]
        }
      ],
      news: [
        { title: "Harry Kane verlängert seinen Vertrag beim FC Bayern", date: "2026-11-09", source: "BBC Sport" },
        { title: "Alphonso Davies hat sich bei Kanada einen Muskelfaserriss zugezogen und fällt vorerst aus", date: "2026-11-16", source: "fcbayern.com" },
        { title: "Trainer Kompany ist wieder da und soll am Freitag gegen Köln an der Seitenlinie stehen", date: "2026-11-15", source: "ran.de" }
      ]
    },

    {
      id: "boca",
      name: "Boca Juniors",
      short: "CABJ",
      kind: "football",
      tagline: "La Mitad Más Uno",
      colors: { primary: "#F2C230", secondary: "#0B3D91", glow: "rgba(242,194,48,.30)" },
      status: [
        { label: "Campeón de Liga 2026", value: "Meister! 🏆", detail: "Platz 1 Jahrestabelle · 63 Pkt" },
        { label: "Copa Sudamericana", value: "Finale", detail: "gegen Atlético Mineiro" },
        { label: "Copa Argentina", value: "Finale", detail: "3:0 gegen Banfield · Finale am 2.12. gegen Platense" }
      ],
      fixtures: [
        { start: "2026-11-21T23:30:00+01:00", comp: "Copa Sudamericana · FINALE", home: "Boca Juniors", away: "Atlético Mineiro", venue: "Estadio Metropolitano, Barranquilla (Kolumbien)", tv: ["TV Südamerika: ESPN / DSports", "Stream: Disney+ / DGO"], note: "Ein einziges Endspiel! 19:30 Uhr in Argentinien · in Deutschland kein TV-Sender", tbc: false },
        { start: "2026-11-26T01:00:00+01:00", comp: "Torneo Clausura · Achtelfinale", home: "Boca Juniors", away: "Independiente Rivadavia", venue: "La Bombonera", tv: ["TV Argentinien: ESPN Premium"], note: "Offiziell bestätigt: Mi 25.11. um 21:00 Uhr Argentinien – bei uns Do 01:00 Uhr nachts · in Deutschland kein TV-Sender", tbc: false },
        { start: "2026-12-02T23:00:00+01:00", comp: "Copa Argentina · FINALE", home: "Boca Juniors", away: "Platense", venue: "Ort noch offen (Mendoza, Santiago del Estero oder Rosario)", tv: ["TV Argentinien: wohl TyC Sports (noch offen)"], note: "Datum Mi 2.12. steht fest · Uhrzeit und Stadion noch nicht bekannt · Sieger darf 2027 in der Copa Libertadores spielen · in Deutschland kein TV-Sender", tbc: true }
      ],
      results: [
        { start: "2026-11-14T23:00:00+01:00", comp: "Copa Argentina · Halbfinale", home: "Boca Juniors", away: "Banfield", score: "3:0", outcome: "S", note: "Tore: Ascacíbar, Villa, Lozano – Boca steht im Finale!" },
        { start: "2026-11-07T21:30:00+01:00", comp: "Torneo Clausura", home: "Boca Juniors", away: "Defensa y Justicia", score: "1:0", outcome: "S", note: "Enner Valencia in der 95. Minute – Boca ist Meister!" },
        { start: "2026-11-01T19:00:00+01:00", comp: "Superclásico", home: "Boca Juniors", away: "River Plate", score: "1:0", outcome: "S" }
      ],
      tables: [
        {
          title: "Tabla Anual 2026 · Endstand",
          cols: ["Pkt"],
          preview: 3,
          rows: [
            { pos: 1, name: "Boca Juniors", v: [63], me: true },
            { pos: 2, name: "Rosario Central", v: [62] },
            { pos: 3, name: "Argentinos Juniors", v: [60] }
          ]
        },
        {
          title: "Torneo Clausura · Zona A (Hauptrunde)",
          cols: ["Info"],
          preview: 3,
          rows: [
            { pos: 1, name: "Instituto", v: ["→ Achtelfinale"] },
            { pos: 2, name: "Boca Juniors", v: ["→ Achtelfinale"], me: true },
            { pos: 4, name: "Defensa y Justicia", v: ["28 Pkt"] }
          ]
        }
      ],
      news: [
        { title: "Schiedsrichter fürs Sudamericana-Finale steht fest: Andrés Matonte aus Uruguay pfeift Boca gegen Mineiro", date: "2026-11-13", source: "442 Perfil / El Gráfico" },
        { title: "3:0 gegen Banfield – Boca steht im Finale der Copa Argentina gegen Platense", date: "2026-11-14", source: "Infobae" },
        { title: "Kapitän Paredes vor dem Sudamericana-Finale: „Wir geben alles“ – Lautaro Blanco soll bis Mittwoch fit sein", date: "2026-11-16", source: "Infobae" }
      ]
    },

    {
      id: "f1",
      name: "Formel 1",
      short: "F1",
      kind: "racing",
      tagline: "Saison 2026 · noch 3 Rennen",
      colors: { primary: "#E10600", secondary: "#C9CED6", glow: "rgba(225,6,0,.30)" },
      status: [
        { label: "Weltmeister 2026", value: "K. Antonelli", detail: "Mercedes · 390 Punkte" },
        { label: "Konstrukteure", value: "Mercedes", detail: "Weltmeister · 652 Punkte" },
        { label: "Kampf um Platz 2", value: "Verstappen", detail: "279 Pkt · Russell 262" }
      ],
      fixtures: [
        { start: "2026-11-21T05:00:00+01:00", comp: "Qualifying", title: "Großer Preis von Las Vegas", venue: "Las Vegas Strip Circuit", tv: ["Sky", "RTL (Free-TV)"] },
        { start: "2026-11-22T05:00:00+01:00", comp: "Rennen", title: "Großer Preis von Las Vegas", venue: "Las Vegas Strip Circuit", tv: ["Sky", "RTL (Free-TV)"], note: "Frühaufsteher-Rennen! RTL ab 04:00 Uhr" },
        { start: "2026-11-28T19:00:00+01:00", comp: "Qualifying", title: "Großer Preis von Katar", venue: "Lusail International Circuit", tv: ["Sky"], tbc: true },
        { start: "2026-11-29T17:00:00+01:00", comp: "Rennen", title: "Großer Preis von Katar", venue: "Lusail International Circuit", tv: ["Sky"] },
        { start: "2026-12-05T15:00:00+01:00", comp: "Qualifying", title: "Großer Preis von Abu Dhabi", venue: "Yas Marina Circuit", tv: ["Sky"] },
        { start: "2026-12-06T14:00:00+01:00", comp: "Rennen · Saisonfinale", title: "Großer Preis von Abu Dhabi", venue: "Yas Marina Circuit", tv: ["Sky"] }
      ],
      results: [
        { start: "2026-11-08T18:00:00+01:00", comp: "GP São Paulo", title: "1. Norris · 2. Verstappen · 4. Russell · 5. Antonelli", outcome: "R", note: "Mercedes holt den Konstrukteurs-Titel" },
        { start: "2026-11-01T21:00:00+01:00", comp: "GP Mexiko", title: "Antonelli wird Weltmeister", outcome: "R" }
      ],
      tables: [
        {
          title: "Fahrer-WM 2026 · nach Brasilien",
          cols: ["Team", "Pkt"],
          preview: 6,
          rows: [
            { pos: 1, name: "Kimi Antonelli", v: ["Mercedes", 390], me: true },
            { pos: 2, name: "Max Verstappen", v: ["Red Bull", 279] },
            { pos: 3, name: "George Russell", v: ["Mercedes", 262] },
            { pos: 4, name: "Lewis Hamilton", v: ["Ferrari", 261] },
            { pos: 5, name: "Charles Leclerc", v: ["Ferrari", 251] },
            { pos: 6, name: "Lando Norris", v: ["McLaren", 246] }
          ]
        },
        {
          title: "Konstrukteurs-WM 2026",
          cols: ["Pkt"],
          preview: 5,
          rows: [
            { pos: 1, name: "Mercedes", v: [652], me: true },
            { pos: 2, name: "Ferrari", v: [512] },
            { pos: 3, name: "Red Bull Racing", v: [415] },
            { pos: 4, name: "McLaren", v: [398] },
            { pos: 5, name: "Racing Bulls", v: [112] },
            { pos: 6, name: "Alpine", v: [69] },
            { pos: 7, name: "Haas", v: [31] },
            { pos: 8, name: "Audi", v: [28] },
            { pos: 9, name: "Williams", v: [12] },
            { pos: 10, name: "Aston Martin", v: [7] },
            { pos: 11, name: "Cadillac", v: [0] }
          ]
        }
      ],
      news: [
        { title: "Rennwoche in Las Vegas: Die Formel 1 fährt wieder nachts über den Strip", date: "2026-11-17", source: "formula1.com" },
        { title: "Mercedes ist Konstrukteurs-Weltmeister 2026", date: "2026-11-08", source: "RacingNews365" },
        { title: "Las Vegas live im Free-TV bei RTL", date: "2026-11-10", source: "DSLWEB" }
      ]
    }
  ]
};
