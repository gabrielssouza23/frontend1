
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Navigation */}
      <nav className="bg-black border-b-4 border-cyan-400 shadow-lg shadow-cyan-400/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-cyan-400 font-mono tracking-wider">
                João Silva<span className="text-pink-500">_</span>
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-cyan-300 hover:text-pink-400 font-medium transition-all duration-300 hover:glow-text font-mono">
                Início
              </a>
              <a href="#hobbies" className="text-cyan-300 hover:text-pink-400 font-medium transition-all duration-300 hover:glow-text font-mono">
                Hobbies
              </a>
              <a href="#contact" className="text-cyan-300 hover:text-pink-400 font-medium transition-all duration-300 hover:glow-text font-mono">
                Contato
              </a>
              <a href="#info" className="text-cyan-300 hover:text-pink-400 font-medium transition-all duration-300 hover:glow-text font-mono">
                Informações
              </a>
              <a href="#schedule" className="text-cyan-300 hover:text-pink-400 font-medium transition-all duration-300 hover:glow-text font-mono">
                Marcar Horário
              </a>
              <a href="#hours" className="text-cyan-300 hover:text-pink-400 font-medium transition-all duration-300 hover:glow-text font-mono">
                Horários
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
              alt="João Silva" 
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg shadow-cyan-400/50 border-4 border-cyan-400 object-cover hover:shadow-pink-400/50 hover:border-pink-400 transition-all duration-300"
            />
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-4 font-mono">
              João Silva
            </h1>
            <p className="text-xl text-cyan-300 mb-6 font-mono">
              Desenvolvedor Full Stack & Designer
            </p>
            <hr className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mb-6" />
          </div>
          
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg shadow-lg shadow-cyan-400/20 p-8 border border-cyan-400/30">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 font-mono">Sobre Mim</h2>
            <div className="space-y-4 text-gray-300">
              <p className="font-mono">
                Olá! Meu nome é <strong className="text-pink-400">João Silva</strong> e sou um desenvolvedor apaixonado por tecnologia 
                com mais de 5 anos de experiência em desenvolvimento web.
              </p>
              <p className="font-mono">
                Especializo-me em criar <em className="text-cyan-400">soluções digitais inovadoras</em> que combinam 
                <span className="text-pink-400 underline">funcionalidade</span> e <span className="text-pink-400 underline">design elegante</span>.
              </p>
              <br />
              <h3 className="text-lg font-semibold text-cyan-400 font-mono">Minhas especialidades incluem:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 font-mono">
                <li><strong className="text-pink-400">Frontend:</strong> React, Vue.js, TypeScript</li>
                <li><strong className="text-pink-400">Backend:</strong> Node.js, Python, PHP</li>
                <li><strong className="text-pink-400">Design:</strong> UI/UX, Figma, Adobe Creative Suite</li>
                <li><strong className="text-pink-400">Banco de Dados:</strong> MySQL, PostgreSQL, MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-16 bg-gradient-to-r from-purple-900/20 to-black/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-12 font-mono">
            Meus Hobbies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg shadow-cyan-400/20 hover:shadow-pink-400/30 transition-all duration-300 border border-cyan-400/30 hover:border-pink-400/50">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" 
                alt="Programação" 
                className="w-full h-40 object-cover rounded-lg mb-4 border border-cyan-400/50"
              />
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-mono">Programação</h3>
              <p className="text-gray-300 font-mono">Desenvolvimento de projetos pessoais e contribuição para open source.</p>
            </div>
            
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg shadow-cyan-400/20 hover:shadow-pink-400/30 transition-all duration-300 border border-cyan-400/30 hover:border-pink-400/50">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=300&h=200&fit=crop" 
                alt="Fotografia" 
                className="w-full h-40 object-cover rounded-lg mb-4 border border-cyan-400/50"
              />
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-mono">Fotografia</h3>
              <p className="text-gray-300 font-mono">Captura de momentos especiais e paisagens naturais.</p>
            </div>
            
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg shadow-cyan-400/20 hover:shadow-pink-400/30 transition-all duration-300 border border-cyan-400/30 hover:border-pink-400/50">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop" 
                alt="Viagens" 
                className="w-full h-40 object-cover rounded-lg mb-4 border border-cyan-400/50"
              />
              <h3 className="text-xl font-semibold text-cyan-400 mb-2 font-mono">Viagens</h3>
              <p className="text-gray-300 font-mono">Explorar novos lugares e conhecer culturas diferentes.</p>
            </div>
          </div>
          
          <hr className="my-8 border-cyan-400/30" />
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-mono">Outras Atividades</h3>
            <div className="space-y-2 text-gray-300 font-mono">
              <p><em className="text-pink-400">Leitura de livros técnicos e ficção científica</em></p>
              <p><strong className="text-cyan-400">Jogos de estratégia</strong> e <span className="text-pink-400 underline">quebra-cabeças</span></p>
              <p>Exercícios físicos e <strong className="text-cyan-400">corrida matinal</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-12 font-mono">
            Contato
          </h2>
          <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg shadow-lg shadow-cyan-400/20 p-8 border border-cyan-400/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" 
                  alt="Contato" 
                  className="w-full h-48 object-cover rounded-lg mb-6 border border-cyan-400/50"
                />
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-mono">Informações de Contato</h3>
                <div className="space-y-3 text-gray-300 font-mono">
                  <p><strong className="text-pink-400">Email:</strong> joao.silva@email.com</p>
                  <p><strong className="text-pink-400">Telefone:</strong> (11) 99999-9999</p>
                  <p><strong className="text-pink-400">LinkedIn:</strong> linkedin.com/in/joaosilva</p>
                  <p><strong className="text-pink-400">GitHub:</strong> github.com/joaosilva</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-mono">Localização</h3>
                <p className="text-gray-300 mb-4 font-mono">São Paulo, SP - Brasil</p>
                
                <hr className="my-4 border-cyan-400/30" />
                
                <h4 className="text-lg font-semibold text-cyan-400 mb-2 font-mono">Redes Sociais</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300 font-mono">
                  <li>Instagram: @joaosilva_dev</li>
                  <li>Twitter: @joaosilva</li>
                  <li>YouTube: João Silva Tech</li>
                </ul>
                
                <br />
                <p className="text-pink-400 font-mono">
                  <em>Disponível para freelances e projetos interessantes!</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-16 bg-gradient-to-r from-purple-900/20 to-black/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-12 font-mono">
            Informações Adicionais
          </h2>
          <div className="space-y-8">
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-8 shadow-lg shadow-cyan-400/20 border border-cyan-400/30">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=200&fit=crop" 
                  alt="Formação" 
                  className="w-full md:w-80 h-48 object-cover rounded-lg border border-cyan-400/50"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">Formação Acadêmica</h3>
                  <div className="space-y-3 text-gray-300 font-mono">
                    <div>
                      <h4 className="font-semibold text-pink-400">Bacharelado em Ciência da Computação</h4>
                      <p><em className="text-cyan-300">Universidade de São Paulo (USP)</em></p>
                      <p>2018 - 2022</p>
                    </div>
                    <hr className="border-cyan-400/30" />
                    <div>
                      <h4 className="font-semibold text-pink-400">MBA em Gestão de Projetos</h4>
                      <p><em className="text-cyan-300">Fundação Getúlio Vargas (FGV)</em></p>
                      <p>2023 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-8 shadow-lg shadow-cyan-400/20 border border-cyan-400/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">Certificações</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop" 
                    alt="Certificações" 
                    className="w-full h-32 object-cover rounded-lg mb-4 border border-cyan-400/50"
                  />
                  <ul className="list-disc list-inside space-y-2 text-gray-300 font-mono">
                    <li><strong className="text-pink-400">AWS Certified Developer</strong></li>
                    <li><span className="text-cyan-400 underline">Google Cloud Professional</span></li>
                    <li><em className="text-pink-400">Microsoft Azure Fundamentals</em></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3 font-mono">Idiomas</h4>
                  <div className="space-y-2 text-gray-300 font-mono">
                    <p><strong className="text-pink-400">Português:</strong> Nativo</p>
                    <p><strong className="text-pink-400">Inglês:</strong> Fluente</p>
                    <p><strong className="text-pink-400">Espanhol:</strong> Intermediário</p>
                  </div>
                  <br />
                  <p className="text-cyan-400 font-mono"><em>Sempre em busca de novos desafios!</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <ScheduleForm />

      {/* Hours Section */}
      <HoursTable />
    </div>
  );
};

// Schedule Form Component
const ScheduleForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    date: '',
    time: '',
    comments: ''
  });
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.date) {
      newErrors.date = 'Data é obrigatória';
    }
    
    if (!formData.time) {
      newErrors.time = 'Horário é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Formulário enviado:', formData);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', date: '', time: '', comments: '' });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="schedule" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-12 font-mono">
          Marcar Horário
        </h2>
        <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg shadow-lg shadow-cyan-400/20 p-8 border border-cyan-400/30">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop" 
                alt="Agendamento" 
                className="w-full h-64 object-cover rounded-lg mb-6 border border-cyan-400/50"
              />
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 font-mono">Agende uma Reunião</h3>
              <p className="text-gray-300 mb-4 font-mono">
                Preencha o formulário ao lado para marcar uma reunião. Responderei em até 24 horas!
              </p>
              <div className="space-y-2 text-gray-300 font-mono">
                <p><strong className="text-pink-400">Horários disponíveis:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>Segunda a Sexta: 9h às 18h</li>
                  <li>Sábado: 9h às 12h</li>
                </ul>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <div className="bg-green-900/50 border border-green-400 text-green-300 px-4 py-3 rounded-lg text-center backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-2 font-mono">Agendamento Enviado!</h3>
                  <p className="font-mono">Obrigado pelo contato. Em breve retornarei!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-black/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-300 font-mono backdrop-blur-sm ${
                        errors.name ? 'border-red-500' : 'border-cyan-400/50'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1 font-mono">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Data *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-black/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-300 font-mono backdrop-blur-sm ${
                        errors.date ? 'border-red-500' : 'border-cyan-400/50'
                      }`}
                    />
                    {errors.date && <p className="text-red-400 text-sm mt-1 font-mono">{errors.date}</p>}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Horário *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 bg-black/50 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-300 font-mono backdrop-blur-sm ${
                        errors.time ? 'border-red-500' : 'border-cyan-400/50'
                      }`}
                    >
                      <option value="">Selecione um horário</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                    {errors.time && <p className="text-red-400 text-sm mt-1 font-mono">{errors.time}</p>}
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-cyan-400 mb-2 font-mono">
                      Comentários Adicionais
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 bg-black/50 border border-cyan-400/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-300 font-mono backdrop-blur-sm"
                      placeholder="Descreva brevemente o assunto da reunião..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-pink-600 text-white py-3 px-4 rounded-md hover:from-cyan-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 font-medium font-mono shadow-lg shadow-cyan-400/30 hover:shadow-pink-400/30"
                  >
                    Enviar Agendamento
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hours Table Component
const HoursTable = () => {
  const scheduleData = [
    { time: '09:00', monday: 'Disponível', tuesday: 'Reunião Cliente A', wednesday: 'Disponível', thursday: 'Desenvolvimento', friday: 'Code Review', saturday: 'Disponível' },
    { time: '10:00', monday: 'Desenvolvimento', tuesday: 'Disponível', wednesday: 'Reunião Equipe', thursday: 'Disponível', friday: 'Desenvolvimento', saturday: 'Disponível' },
    { time: '11:00', monday: 'Disponível', tuesday: 'Desenvolvimento', wednesday: 'Disponível', thursday: 'Reunião Cliente B', friday: 'Disponível', saturday: 'Consulta' },
    { time: '14:00', monday: 'Reunião Projeto', tuesday: 'Disponível', wednesday: 'Desenvolvimento', thursday: 'Disponível', friday: 'Planning', saturday: '-' },
    { time: '15:00', monday: 'Desenvolvimento', tuesday: 'Consulta', wednesday: 'Disponível', thursday: 'Desenvolvimento', friday: 'Disponível', saturday: '-' },
    { time: '16:00', monday: 'Disponível', tuesday: 'Desenvolvimento', wednesday: 'Reunião Cliente C', thursday: 'Disponível', friday: 'Desenvolvimento', saturday: '-' },
    { time: '17:00', monday: 'Code Review', tuesday: 'Disponível', wednesday: 'Disponível', thursday: 'Daily Meeting', friday: 'Disponível', saturday: '-' },
  ];

  return (
    <section id="hours" className="py-16 bg-gradient-to-r from-purple-900/20 to-black/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-12 font-mono">
          Horários Semanais
        </h2>
        
        <div className="mb-8 text-center">
          <img 
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=300&fit=crop" 
            alt="Agenda Semanal" 
            className="w-full max-w-2xl h-64 object-cover rounded-lg mx-auto shadow-lg shadow-cyan-400/30 border border-cyan-400/50"
          />
        </div>

        <div className="bg-black bg-opacity-60 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-cyan-400/20 overflow-x-auto border border-cyan-400/30">
          <table className="w-full border-collapse bg-black/30 rounded-lg overflow-hidden shadow-sm backdrop-blur-sm">
            <thead>
              <tr className="bg-gradient-to-r from-cyan-600 to-pink-600 text-white">
                <th className="border border-cyan-400/30 px-4 py-3 text-left font-semibold font-mono">Horário</th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left font-semibold font-mono">Segunda</th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left font-semibold font-mono">Terça</th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left font-semibold font-mono">Quarta</th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left font-semibold font-mono">Quinta</th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left font-semibold font-mono">Sexta</th>
                <th className="border border-cyan-400/30 px-4 py-3 text-left font-semibold font-mono">Sábado</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-900/50' : 'bg-black/30'}>
                  <td className="border border-cyan-400/30 px-4 py-3 font-semibold text-cyan-400 font-mono">{row.time}</td>
                  <td className={`border border-cyan-400/30 px-4 py-3 font-mono ${row.monday === 'Disponível' ? 'text-green-400 font-medium' : 'text-gray-300'}`}>
                    {row.monday}
                  </td>
                  <td className={`border border-cyan-400/30 px-4 py-3 font-mono ${row.tuesday === 'Disponível' ? 'text-green-400 font-medium' : 'text-gray-300'}`}>
                    {row.tuesday}
                  </td>
                  <td className={`border border-cyan-400/30 px-4 py-3 font-mono ${row.wednesday === 'Disponível' ? 'text-green-400 font-medium' : 'text-gray-300'}`}>
                    {row.wednesday}
                  </td>
                  <td className={`border border-cyan-400/30 px-4 py-3 font-mono ${row.thursday === 'Disponível' ? 'text-green-400 font-medium' : 'text-gray-300'}`}>
                    {row.thursday}
                  </td>
                  <td className={`border border-cyan-400/30 px-4 py-3 font-mono ${row.friday === 'Disponível' ? 'text-green-400 font-medium' : 'text-gray-300'}`}>
                    {row.friday}
                  </td>
                  <td className={`border border-cyan-400/30 px-4 py-3 font-mono ${row.saturday === 'Disponível' ? 'text-green-400 font-medium' : 'text-gray-500'}`}>
                    {row.saturday}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded shadow-sm shadow-green-400/50"></div>
                <span className="text-gray-300 font-mono">Disponível</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-500 rounded shadow-sm shadow-gray-500/50"></div>
                <span className="text-gray-300 font-mono">Ocupado</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-pink-400 font-mono">
            <em>Horários sujeitos a alteração. Entre em contato para confirmar disponibilidade.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
