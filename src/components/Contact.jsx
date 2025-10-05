import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    consulta: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Consulta de portafolio: ${formData.consulta}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nConsulta: ${formData.consulta}\n\nMensaje:\n${formData.mensaje}`
    );
    
    window.location.href = `mailto:tuemail@ejemplo.com?subject=${subject}&body=${body}`;
    
    setFormData({
      nombre: '',
      email: '',
      consulta: '',
      mensaje: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-gray-400">¿Tienes alguna consulta? Envíame un mensaje</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-black p-8 rounded-lg shadow-2xl">
          <div className="mb-6">
            <label htmlFor="nombre" className="block text-gray-300 mb-2 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="consulta" className="block text-gray-300 mb-2 font-medium">
              Asunto de Consulta
            </label>
            <input
              type="text"
              id="consulta"
              name="consulta"
              value={formData.consulta}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300"
              placeholder="Asunto de tu consulta"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-gray-300 mb-2 font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="6"
              className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Enviar Mensaje</span>
          </button>
        </form>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Mail size={20} />
            <p>También puedes contactarme directamente en tu email</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;