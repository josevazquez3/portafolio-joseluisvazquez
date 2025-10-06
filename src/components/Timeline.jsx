import { Briefcase, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  const experiences = [
    {
      company: 'Colegio de Médicos de la Provincia de Bs. As. (Consejo Superior)',
      period: 'Febrero 2017 - Actual',
      description: 'Administrativo Contable, Tesorería, atención al público, certificaciones, informes de tesorería, conciliaciones bancarias, manejo de caja, archivo, pago a proveedores.',
      isCurrent: true
    },
    {
      company: 'Tradelog S.A.',
      period: 'Octubre 2012 - Julio 2016',
      description: 'Administrativo Contable. Sector de créditos y cobranzas, analista crediticio, cobranza de moras tempranas y tardías, Pagos y Facturación. Cobranzas de clientes del área de comercio Exterior. Sector Tesorería, manejo de cartera de cheques, transferencias bancarias, factoring. Conciliaciones bancarias.',
      isCurrent: false
    },
    {
      company: 'Finvert SRL',
      period: 'Abril 2008 - Junio 2012',
      description: 'Responsable de sector tesorería y cobranzas. Apertura de cuentas en bancos. Manejo de cuenta corrientes. Liquidaciones de sueldos, CBU y cuotas de afiliados. Control y resumen de deudores.',
      isCurrent: false
    },
    {
      company: 'Ministerio de Economía - Secretaría de Industria y Comercio Exterior',
      period: 'Abril 2007 - Marzo 2008',
      description: 'Responsable del régimen de prórrogas de Importación temporal. Coordinación y logística en comercio exterior. Atención personalizada, seguimiento de expedientes y resolución de trámites a empresas nacionales e internacionales. Entrega de certificados.',
      isCurrent: false
    },
    {
      company: 'Mutual 9 de Octubre y Estudio Jurídico M2',
      period: 'Junio 2005 - Marzo 2007',
      description: 'Administrativo. Trámites y gestiones en tribunales. Afiliaciones.',
      isCurrent: false
    },
    {
      company: 'Depósito Marrac SRL, Zona Franca',
      period: 'Marzo 2004 - Mayo 2005',
      description: 'Supervisor de depósito y logística. Trámites aduaneros. Control de stock de mercadería. Auditorias internas. Coordinación de pedido y entregas nacionales e internacionales de embalajes Administrativo.',
      isCurrent: false
    },
    {
      company: 'Vinarco S.R.L',
      period: 'Marzo 2001 - Febrero 2004',
      description: 'Empleado administrativo. Atención telefónica, trámites ante organismos públicos y privados. Asesoramiento y manejo de agenda de los gerentes.',
      isCurrent: false
    },
    {
      company: 'Giva SA y Depósito GR, Zona Franca',
      period: 'Febrero 1998 - Febrero 2001',
      description: 'Administrativo. Coordinación de pedido y entregas. Atención telefónica.',
      isCurrent: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experiencia" className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Experiencia Laboral
          </h2>
          <div className="h-1 w-20 bg-white mx-auto"></div>
        </div>

        <div className="relative">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white hidden md:block"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="relative mb-16 md:mb-20 flex items-center"
              >
                {/* Tarjeta izquierda */}
                {isLeft && (
                  <div className={`w-full md:w-5/12 transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                  }`}>
                    <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform hover:scale-105">
                      <div className="flex items-start flex-row mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 mr-3">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-serif text-white mb-2 leading-tight">
                            {exp.company}
                          </h3>
                          <div className="flex items-center text-gray-400 text-sm space-x-2">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                            {exp.isCurrent && (
                              <span className="px-3 py-1 bg-white text-black text-xs rounded-full font-medium ml-2">
                                Actual
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Espacio vacío izquierdo para elementos de la derecha */}
                {!isLeft && <div className="hidden md:block w-5/12"></div>}

                {/* Punto central con línea */}
                <div className="hidden md:flex w-2/12 justify-center items-center relative px-4">
                  {/* Línea hacia la izquierda */}
                  {isLeft && (
                    <div 
                      className={`absolute right-1/2 mr-2 h-0.5 bg-white transition-all duration-700 ${
                        isVisible ? 'w-[calc(50%-0.5rem)]' : 'w-0'
                      }`}
                    ></div>
                  )}
                  
                  {/* Punto */}
                  <div className={`w-4 h-4 rounded-full border-2 z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  } ${
                    exp.isCurrent 
                      ? 'bg-white border-white shadow-lg shadow-white/50 animate-pulse' 
                      : 'bg-black border-white hover:bg-white'
                  }`}></div>

                  {/* Línea hacia la derecha */}
                  {!isLeft && (
                    <div 
                      className={`absolute left-1/2 ml-2 h-0.5 bg-white transition-all duration-700 ${
                        isVisible ? 'w-[calc(50%-0.5rem)]' : 'w-0'
                      }`}
                    ></div>
                  )}
                </div>

                {/* Tarjeta derecha */}
                {!isLeft && (
                  <div className={`w-full md:w-5/12 transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}>
                    <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-white rounded-lg p-6 shadow-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 transform hover:scale-105">
                      <div className="flex items-start flex-row mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 mr-3">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-serif text-white mb-2 leading-tight">
                            {exp.company}
                          </h3>
                          <div className="flex items-center text-gray-400 text-sm space-x-2">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                            {exp.isCurrent && (
                              <span className="px-3 py-1 bg-white text-black text-xs rounded-full font-medium ml-2">
                                Actual
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Espacio vacío derecho para elementos de la izquierda */}
                {isLeft && <div className="hidden md:block w-5/12"></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;