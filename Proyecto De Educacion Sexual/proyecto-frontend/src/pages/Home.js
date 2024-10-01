import React from 'react';
import TopicCard from '../components/TopicCard';
import topics from '../data/topics';
import '../styles/Home.css';

// Componente principal de la página de inicio
function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Sexualidad Sin Fronteras</h1>
        <p>Explora, aprende y crece en un ambiente seguro y educativo.</p>
      </header>
      
      <section className="home-intro">
        <h2>Navega por los Temas</h2>
        <p>Selecciona un tema para aprender más sobre educación sexual de manera amigable y comprensible.</p>

        {/* Renderizamos la cuadrícula de tarjetas de temas usando el componente TopicCard */}
        <div className="topics-grid">
          {topics.map(topic => (
            <TopicCard
              key={topic.id}
              title={topic.title}
              description={topic.description}
              imageUrl={topic.imageUrl}
              topicId={topic.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
