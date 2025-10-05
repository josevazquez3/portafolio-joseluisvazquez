import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ecommerce de Gemas',
      description: 'Plataforma de comercio electrónico especializada en la venta de gemas y piedras preciosas.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      image: '/img/project1.jpg'
    },
    {
      title: 'Pizzería Platense',
      description: 'Sistema de pedidos online para pizzería con gestión de inventario y delivery.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'React Router'],
      image: '/img/project2.jpg'
    },
    {
      title: 'Plataforma de Yoga',
      description: 'Aplicación web para clases de yoga en línea con sistema de reservas y pagos.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS'],
      image: '/img/project3.jpg'
    },
    {
      title: 'Biblioteca Instituto 210',
      description: 'Sistema de gestión bibliotecaria con control de préstamos y catálogo digital.',
      technologies: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
      image: '/img/project4.jpg'
    },
    {
      title: 'Agenda y Eventos - Software de Escritorio',
      description: 'Aplicación de escritorio para gestión de agenda, eventos y recordatorios.',
      technologies: ['Python', 'Tkinter', 'SQLite'],
      image: '/img/project5.jpg'
    }
  ];

  return (
    <section id="proyectos" className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 text-center">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white" size={32} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;