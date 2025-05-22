import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { supabase } from "../../supabase-client";
import styles from "./SongDetail.module.css";

function SongDetail() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchSong = async () => {
      const { data, error } = await supabase
        .from("song")
        .select("song_id, title, audio_path")
        .eq("song_id", id)
        .single();

      if (error) {
        console.error("Erreur lors du fetch du morceau :", error.message);
        return;
      }

      setSong(data);

      if (data.audio_path) {
        const { data: signedData, error: signedError } = await supabase.storage
          .from("ballade-data")
          .createSignedUrl(data.audio_path, 3600); // 1h

        if (signedError) {
          console.error("Erreur URL signée :", signedError.message);
          setAudioUrl(null);
        } else {
          setAudioUrl(signedData.signedUrl);
        }
      } else {
        setAudioUrl(null);
      }
    };

    fetchSong();
  }, [id]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  if (!song) return <p>Chargement...</p>;

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.songTitle}>{song.title}</h2>

      {audioUrl ? (
        <>
          <button className={styles.pdfButton} onClick={handlePlay}>
            ▶️ Écouter le morceau
          </button>
          <audio ref={audioRef} src={audioUrl} />
        </>
      ) : (
        <p>Audio non disponible</p>
      )}

      <div className={styles.buttonContainer}>
        <button className={styles.pdfButton}>Paroles</button>
        <button className={styles.pdfButton}>Partition</button>
      </div>
    </div>
  );
}

export default SongDetail;
