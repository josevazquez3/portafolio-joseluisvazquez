import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certificación 1',
      institution: 'Institución',
      date: 'Año',
      description: 'Descripción del curso o certificación',
      image: '/img/cert1.jpg'
    },
    {
      title: 'Certificación 2',
      institution: 'Institución',
      date: 'Año',
      description: 'Descripción del curso o certificación',
      image: '/img/cert2.jpg'
    },
    {
      title: 'Certificación 3',
      institution: 'Institución',
      date: 'Año',
      description: 'Descripción del curso o certificación',
      image: '/img/cert3.jpg'
    }
  ];

  const skills = [
    { name: 'Excel Avanzado', level: 95 },
    { name: 'Windows & Linux', level: 90 },
    { name: 'Bash Script', level: 85 },
    { name: 'Inglés Avanzado', level: 90 },
    { name: 'Análisis de Sistemas', level: 92 },
    { name: 'Comercio Exterior', level: 88 },
    { name: 'Gestión Administrativa', level: 95 },
    { name: 'Recursos Humanos', level: 85 }
  ];

  return (
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
              <div className="h-64 bg-gray-800 overflow-hidden">
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

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif text-white mb-8 text-center">Habilidades Técnicas</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;