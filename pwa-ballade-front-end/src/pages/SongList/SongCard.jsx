import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./SongCard.module.css"; // ton style ici

function SongCard({ song }) {
  const { t } = useTranslation();

  return (
    <div className={styles.card}>
      <h3>{song.title}</h3>
      <img src={song.musicIcon} alt="Music Icon" />
      <p><strong>{t("origin")}:</strong> {t(song.origin)}</p>
      <p><strong>{t("theme")}:</strong> {t(song.theme)}</p>
      <p><strong>{t("beneficiaries")}:</strong> {t(song.beneficiaries)}</p>
      <p><strong>{t("difficulty")}:</strong> {t(song.difficulty)}</p>
    </div>
  );
}

export default SongCard;
