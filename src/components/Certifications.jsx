import { Award, Code, Globe, Briefcase, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: 'Desarrollo Fullstack Web',
      institution: 'SICOS Informática',
      date: '2022',
      description: 'Desarrollo web frontend con HTML5 CSS3 JavaScript y backend con PHP y MySQL.',
      image: '/img/diplofullstack.png'
    },
    {
      title: 'Diplomatura Python Intermedio',
      institution: 'UNIVERSIDAD UTN CABA',
      date: '2025',
      description: 'Diplomatura Python Intermedio en la UTN Universidad Tecnológica Nacional.',
      image: '/img/diplopythonintermedio.png'
    },
    {
      title: 'Diplomatura Python Inicial',
      institution: 'UNIVERSIDAD UTN CABA',
      date: '2025',
      description: 'Diplomatura Python Inicial en la UTN Universidad Tecnológica Nacional.',
      image: '/img/diplopythoninicial.png'
    }
  ];

  const expertise = [
    {
      icon: Code,
      title: 'Tecnología',
      skills: 'Excel Avanzado • Windows & Linux • Bash Script • Análisis de Sistemas'
    },
    {
      icon: Globe,
      title: 'Idiomas',
      skills: 'Inglés Avanzado • Español Nativo • Comunicación Internacional'
    },
    {
      icon: Briefcase,
      title: 'Gestión',
      skills: 'Gestión Administrativa • Recursos Humanos • Liderazgo de Equipos'
    },
    {
      icon: TrendingUp,
      title: 'Negocios',
      skills: 'Comercio Exterior • Negociación • Logística • Planificación Estratégica'
    }
  ];

  return (
    <>
      <section id="certificaciones" className="min-h-screen bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 text-center">
            Certificaciones & Conocimientos
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
              >
                <div 
                  className="h-64 bg-gray-800 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Award className="text-white mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2">{cert.title}</h3>
                      <p className="text-gray-400 mb-1">{cert.institution}</p>
                      <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                      <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-serif text-white mb-4">Áreas de Expertise</h3>
              <div className="h-1 w-20 bg-white mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {expertise.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-lg transform transition-transform duration-300 group-hover:scale-105"></div>
                    <div className="relative bg-black/80 backdrop-blur-sm rounded-lg p-8 border border-white/10 transition-all duration-300 group-hover:border-white/30">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                          <Icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-serif text-white mb-3">
                            {area.title}
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {area.skills}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Modal para ver imagen completa */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Certificación"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Certifications;