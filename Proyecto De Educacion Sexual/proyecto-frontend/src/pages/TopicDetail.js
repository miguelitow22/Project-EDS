import React from 'react';
import { useParams } from 'react-router-dom';
import topics from '../data/topics';
import '../styles/TopicDetail.css';

// Componente para mostrar los detalles de un tema específico
function TopicDetail() {
  const { topicId } = useParams(); // Obtenemos el ID del tema desde los parámetros de la URL
  const topic = topics.find((t) => t.id === parseInt(topicId)); // Buscamos el tema correspondiente

  // Verificamos si el tema existe; si no, mostramos un mensaje
  if (!topic) {
    return <div className="topic-detail">Topic not found</div>; // Mensaje cuando no se encuentra el tema
  }

  return (
    <div className="topic-detail">
      <div className="back-button">
        <a href="/">← Back to Home</a> {/* Enlace para volver a la página principal */}
      </div>
      <h2>{topic.title}</h2>
      <p className="description">{topic.description}</p>
      {/* Si hay un video relacionado, lo mostramos en un iframe */}
      {topic.videoUrl && (
        <div className="video-container">
          <iframe
            src={topic.videoUrl}
            title={topic.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <p className="additional-info">{topic.additionalInfo}</p> {/* Información adicional del tema */}
    </div>
  );
}

export default TopicDetail;
