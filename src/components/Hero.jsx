const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/img/fotoperfil.jpeg" 
              alt="José Luis Vazquez" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            José Luis Vazquez
          </h1>
          <div className="h-1 w-32 bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-12 max-w-3xl mx-auto">
            Gerente Administrativo | Analista de Sistemas | Profesional Multidisciplinario
          </p>
          <a
            href="#sobre-mi"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;