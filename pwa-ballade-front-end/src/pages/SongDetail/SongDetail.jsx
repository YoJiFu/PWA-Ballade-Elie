import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { supabase } from "../../supabase-client";
import styles from "./SongDetail.module.css";

function SongDetail() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        // 1. Récupérer les métadonnées de la chanson
        const { data, error: songError } = await supabase
          .from("song")
          .select("song_id, title, audio_path")
          .eq("song_id", id)
          .single();

        if (songError) throw songError;
        if (!data) throw new Error("Aucune donnée trouvée");
        
        setSong(data);

        // 2. Vérifier le chemin audio
        if (!data.audio_path) {
          throw new Error("Chemin audio non spécifié");
        }

        console.log("Chemin audio:", data.audio_path);

        // 3. Deux méthodes pour récupérer l'audio :
        
        // Méthode A : URL publique (si le fichier est public)
        // const publicUrl = supabase.storage
        //   .from("ballade-data")
        //   .getPublicUrl(data.audio_path);
        // setAudioUrl(publicUrl.data.publicUrl);

        // Méthode B : URL signée (pour les fichiers privés)
        const { data: signedData, error: signedError } = await supabase.storage
          .from("ballade-data")
          .createSignedUrl(data.audio_path, 3600); // 1h expiration

        if (signedError) throw signedError;

        console.log("URL signée générée:", signedData.signedUrl);
        setAudioUrl(signedData.signedUrl);

      } catch (err) {
        console.error("Erreur:", err);
        setError(err.message);
      }
    };

    fetchSong();
  }, [id]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Erreur de lecture:", e));
    }
  };

  if (!song) return <div>Chargement en cours...</div>;

  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.songTitle}>{song.title}</h2>

      {error && <p className={styles.error}>Erreur: {error}</p>}

      {audioUrl ? (
        <>
          <button className={styles.pdfButton} onClick={handlePlay}>
            ▶️ Écouter le morceau
          </button>
          <audio
            ref={audioRef}
            src={audioUrl}
            controls
            className={styles.audioPlayer}
          />
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