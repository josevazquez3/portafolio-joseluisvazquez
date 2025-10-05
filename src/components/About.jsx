import { User, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 text-center">
          Sobre Mí
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <User className="text-white mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Formación Académica</h3>
                <ul className="space-y-2 text-gray-300 leading-relaxed">
                  <li>• Técnico Superior en Analista de Sistemas</li>
                  <li>• Técnico Superior en Comercio Exterior</li>
                  <li>• Despachante de Aduana</li>
                  <li>• Auxiliar Contable</li>
                  <li>• Auxiliar Administrativo</li>
                  <li>• Auxiliar en Recursos Humanos</li>
                  <li>• Liquidador de Sueldos</li>
                  <li>• Dactilógrafo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Briefcase className="text-white mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Rol Actual</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Actualmente me desempeño como <span className="text-white font-medium">Gerente Administrativo</span> del Consejo Superior del Colegio de Médicos de la Provincia de Buenos Aires.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Responsable de las áreas de <span className="text-white">Tesorería</span>, <span className="text-white">Secretaría</span>, <span className="text-white">Recursos Humanos</span> y <span className="text-white">Sistemas</span> como Analista Funcional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 pt-6">
              <Heart className="text-white mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Pasiones</h3>
                <p className="text-gray-300 leading-relaxed">
                  Grafología • Deporte • Música (Guitarra)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;