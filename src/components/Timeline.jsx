const Timeline = () => {
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

  return (
    <section id="experiencia" className="min-h-screen bg-black py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16 text-center">
          Experiencia Laboral
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                <div className="relative">
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full -ml-2 ${
                    exp.isCurrent ? 'bg-white' : 'bg-gray-600'
                  } ${exp.isCurrent ? 'animate-pulse' : ''}`}></div>
                </div>
              </div>

              <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-serif text-white pr-4">{exp.company}</h3>
                    {exp.isCurrent && (
                      <span className="px-3 py-1 bg-white text-black text-xs rounded-full font-medium whitespace-nowrap">
                        Actual
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;