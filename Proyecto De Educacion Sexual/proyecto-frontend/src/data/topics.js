// src/data/topics.js

// Lista de temas educativos con información adicional.
// Cada objeto en el array "topics" contiene información sobre un tema en particular,
// incluyendo título, descripción, URL de imagen y video, y detalles adicionales.
const topics = [
  {
    id: 1, // Identificador único del tema
    title: 'ETS', // Título del tema
    description: 'Información sobre enfermedades de transmisión sexual.', // Descripción breve
    imageUrl: 'https://compartefelicidad.com/wp-content/uploads/2020/06/12-06-blog-CF-b.jpg', // Imagen ilustrativa
    videoUrl: 'https://www.youtube.com/embed/Nw8-ZmOkHm4?si=-Qco0StRRxyrMvy5', // Video explicativo
    additionalInfo: 'Las enfermedades de transmisión sexual (ETS) son infecciones que se propagan principalmente a través del contacto sexual. Los síntomas pueden variar, y algunas ETS pueden no presentar síntomas visibles. Es importante conocer los métodos de prevención y realizarse pruebas regularmente. Los tipos comunes incluyen clamidia, gonorrea, sífilis, herpes y VIH.', // Información detallada adicional sobre el tema
  },
  // Más objetos de temas, con información similar a la anterior
  // Cada tema contiene los mismos campos, lo que permite un manejo uniforme de los datos
  {
    id: 2,
    title: 'Métodos anticonceptivos',
    description: 'Conoce los diferentes métodos anticonceptivos.',
    imageUrl: 'https://www.reproduccionasistida.org/wp-content/%2Fdiferentes-metodos-anticonceptivos.png',
    videoUrl: 'https://www.youtube.com/embed/71_GkinDLPY?si=E7nkRpK_fGmXVO9-',
    additionalInfo: 'Existen varios métodos anticonceptivos disponibles, cada uno con diferentes niveles de eficacia y características...',
  },
  {
    id: 3,
    title: 'Cuerpo y sexualidad',
    description: 'Todo sobre el cuerpo y la sexualidad.',
    imageUrl: 'https://i.ytimg.com/vi/6DRuI-OOueY/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/AuOawD2qpwE?si=NCbxrtzbjOT_TKPY',
    additionalInfo: 'El desarrollo del cuerpo y la sexualidad es un aspecto fundamental durante la adolescencia...',
  },
  {
    id: 4,
    title: 'Relaciones sanas',
    description: 'Aprende sobre relaciones sanas y respetuosas.',
    imageUrl: 'https://sindepre.org/wp-content/uploads/2024/02/relaciones-sanas.jpg',
    videoUrl: 'https://www.youtube.com/embed/wF1B0jVWhtw?si=fevCcwB-tSVl8a4I',
    additionalInfo: 'Una relación sana se basa en el respeto mutuo, la comunicación abierta y el apoyo emocional...',
  },
];

// Exportamos los temas para que otros componentes puedan importarlos y utilizarlos
export default topics;
