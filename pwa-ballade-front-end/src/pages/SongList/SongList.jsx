import { useEffect, useState } from "react";
import { supabase } from "../../supabase-client";
import { Link } from "react-router-dom";
import styles from "./SongList.module.css";
import arrow from "../../assets/icons/arrow.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";



function SongList() {
  const { t } = useTranslation();

  const [songs, setSongs] = useState([]);

  // Filtres (tous à zéro au départ)
  const [filters, setFilters] = useState({
    origin: "",
    difficulty: "",
    beneficiaries: ""
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      const { data, error } = await supabase
        .from("song")
        .select(`
          song_id,
          title,
          difficulty_level ( level_label ),
          theme ( theme_name ),
          origin ( geo_zone ),
          beneficiaries ( benef_label )
        `);

      if (error) {
        console.error("Erreur de récupération :", error.message);
      } else {
        setSongs(data);
      }
    };

    fetchSongs();
  }, []);

  const filteredSongs = songs.filter((song) => {
    return (
      (filters.origin === "" || song.origin.geo_zone === filters.origin) &&
      (filters.difficulty === "" || song.difficulty_level.level_label === filters.difficulty) &&
      (filters.beneficiaries === "" || song.beneficiaries.benef_label === filters.beneficiaries)
    );
  });

  // 🔁 Fonction pour réinitialiser les filtres
  
  const resetFilters = () => {
    setFilters({
      origin: "",
      difficulty: "",
      beneficiaries: ""
    });
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Sélecteur de langue */}
      <div className={styles.languageToggle}>
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="EN"
          onClick={() => changeLanguage("en")}
        />
        <img
          src="https://flagcdn.com/w40/fr.png"
          alt="FR"
          onClick={() => changeLanguage("fr")}
        />
      </div>

      <Link to="/" className={styles.backArrow}>
        <img src={arrow} alt="Back arrow" />
      </Link>

      <h1 className={styles.pageTitle}>{t("songList")}</h1>

      {/* Filtres */}
      <div className={styles.filters}>
        <select
          value={filters.origin}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, origin: e.target.value }))
          }
        >
          <option value=""> Origines</option>
          {Array.from(new Set(songs.map((s) => s.origin.geo_zone))).map((zone) => (
            <option key={zone} value={zone}>
              {zone}
            </option>
          ))}
        </select>

        <select
          value={filters.difficulty}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, difficulty: e.target.value }))
          }
        >
          <option value=""> Difficultés</option>
          {Array.from(new Set(songs.map((s) => s.difficulty_level.level_label))).map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={filters.beneficiaries}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, beneficiaries: e.target.value }))
          }
        >
          <option value="">Bénéficiaires</option>
          {Array.from(new Set(songs.map((s) => s.beneficiaries.benef_label))).map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>

        {/* 🔘 Bouton de réinitialisation */}
        <button className={styles.resetButton} onClick={resetFilters}>
          Réinitialiser 
        </button>
      </div>

      {/* Liste des chansons */}
      <div>

      {filteredSongs.map((entry) => (
  <Link
    to={`/song/${entry.song_id}`}
    key={entry.song_id}
    className={styles.songTitle}
  >
    {entry.title}
  </Link>
))}

      </div>
    </div>
  );
}

export default SongList;
