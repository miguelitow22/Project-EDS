import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TopicCard.css';

// Componente que muestra una tarjeta con información de un tema
function TopicCard({ title, description, imageUrl, topicId }) {
  return (
    <div className="topic-card">
      {/* Imagen del tema */}
      <img src={imageUrl} alt={title} className="topic-image" />
      {/* Contenido de la tarjeta */}
      <div className="topic-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Enlace para ver más detalles del tema */}
        <Link to={`/topic/${topicId}`} className="learn-more">Leer Más</Link>
      </div>
    </div>
  );
}

export default TopicCard;
