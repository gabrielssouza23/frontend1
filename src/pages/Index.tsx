
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-indigo-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-800">João Silva</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Início
              </a>
              <a href="#hobbies" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Hobbies
              </a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Contato
              </a>
              <a href="#info" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Informações
              </a>
              <a href="#schedule" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
                Marcar Horário
              </a>
              <a href="#hours" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
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
              className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">João Silva</h1>
            <p className="text-xl text-gray-600 mb-6">Desenvolvedor Full Stack & Designer</p>
            <hr className="w-24 h-1 bg-indigo-500 mx-auto mb-6" />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sobre Mim</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Olá! Meu nome é <strong>João Silva</strong> e sou um desenvolvedor apaixonado por tecnologia 
                com mais de 5 anos de experiência em desenvolvimento web.
              </p>
              <p>
                Especializo-me em criar <em>soluções digitais inovadoras</em> que combinam 
                <u>funcionalidade</u> e <u>design elegante</u>.
              </p>
              <br />
              <h3 className="text-lg font-semibold">Minhas especialidades incluem:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Frontend:</strong> React, Vue.js, TypeScript</li>
                <li><strong>Backend:</strong> Node.js, Python, PHP</li>
                <li><strong>Design:</strong> UI/UX, Figma, Adobe Creative Suite</li>
                <li><strong>Banco de Dados:</strong> MySQL, PostgreSQL, MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meus Hobbies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" 
                alt="Programação" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Programação</h3>
              <p className="text-gray-600">Desenvolvimento de projetos pessoais e contribuição para open source.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=300&h=200&fit=crop" 
                alt="Fotografia" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fotografia</h3>
              <p className="text-gray-600">Captura de momentos especiais e paisagens naturais.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop" 
                alt="Viagens" 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Viagens</h3>
              <p className="text-gray-600">Explorar novos lugares e conhecer culturas diferentes.</p>
            </div>
          </div>
          
          <hr className="my-8" />
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Outras Atividades</h3>
            <div className="space-y-2 text-gray-700">
              <p><em>Leitura de livros técnicos e ficção científica</em></p>
              <p><strong>Jogos de estratégia</strong> e <u>quebra-cabeças</u></p>
              <p>Exercícios físicos e <strong>corrida matinal</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contato</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop" 
                  alt="Contato" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações de Contato</h3>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Email:</strong> joao.silva@email.com</p>
                  <p><strong>Telefone:</strong> (11) 99999-9999</p>
                  <p><strong>LinkedIn:</strong> linkedin.com/in/joaosilva</p>
                  <p><strong>GitHub:</strong> github.com/joaosilva</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Localização</h3>
                <p className="text-gray-700 mb-4">São Paulo, SP - Brasil</p>
                
                <hr className="my-4" />
                
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Redes Sociais</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Instagram: @joaosilva_dev</li>
                  <li>Twitter: @joaosilva</li>
                  <li>YouTube: João Silva Tech</li>
                </ul>
                
                <br />
                <p className="text-gray-600">
                  <em>Disponível para freelances e projetos interessantes!</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Informações Adicionais</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=200&fit=crop" 
                  alt="Formação" 
                  className="w-full md:w-80 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Formação Acadêmica</h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <h4 className="font-semibold">Bacharelado em Ciência da Computação</h4>
                      <p><em>Universidade de São Paulo (USP)</em></p>
                      <p>2018 - 2022</p>
                    </div>
                    <hr />
                    <div>
                      <h4 className="font-semibold">MBA em Gestão de Projetos</h4>
                      <p><em>Fundação Getúlio Vargas (FGV)</em></p>
                      <p>2023 - 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Certificações</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop" 
                    alt="Certificações" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>AWS Certified Developer</strong></li>
                    <li><u>Google Cloud Professional</u></li>
                    <li><em>Microsoft Azure Fundamentals</em></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Idiomas</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Português:</strong> Nativo</p>
                    <p><strong>Inglês:</strong> Fluente</p>
                    <p><strong>Espanhol:</strong> Intermediário</p>
                  </div>
                  <br />
                  <p className="text-gray-600"><em>Sempre em busca de novos desafios!</em></p>
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
  const [errors, setErrors] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validateForm = () => {
    const newErrors = {};
    
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

  const handleSubmit = (e) => {
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

  const handleChange = (e) => {
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Marcar Horário</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop" 
                alt="Agendamento" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Agende uma Reunião</h3>
              <p className="text-gray-600 mb-4">
                Preencha o formulário ao lado para marcar uma reunião. Responderei em até 24 horas!
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Horários disponíveis:</strong></p>
                <ul className="list-disc list-inside ml-4">
                  <li>Segunda a Sexta: 9h às 18h</li>
                  <li>Sábado: 9h às 12h</li>
                </ul>
              </div>
            </div>
            
            <div>
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  <h3 className="text-lg font-semibold mb-2">Agendamento Enviado!</h3>
                  <p>Obrigado pelo contato. Em breve retornarei!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Data *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Horário *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.time ? 'border-red-500' : 'border-gray-300'
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
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>

                  <div>
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                      Comentários Adicionais
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Descreva brevemente o assunto da reunião..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200 font-medium"
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
    <section id="hours" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Horários Semanais</h2>
        
        <div className="mb-8 text-center">
          <img 
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=300&fit=crop" 
            alt="Agenda Semanal" 
            className="w-full max-w-2xl h-64 object-cover rounded-lg mx-auto shadow-lg"
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-lg overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Horário</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Segunda</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Terça</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quarta</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quinta</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sexta</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sábado</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-indigo-600">{row.time}</td>
                  <td className={`border border-gray-300 px-4 py-3 ${row.monday === 'Disponível' ? 'text-green-600 font-medium' : 'text-gray-700'}`}>
                    {row.monday}
                  </td>
                  <td className={`border border-gray-300 px-4 py-3 ${row.tuesday === 'Disponível' ? 'text-green-600 font-medium' : 'text-gray-700'}`}>
                    {row.tuesday}
                  </td>
                  <td className={`border border-gray-300 px-4 py-3 ${row.wednesday === 'Disponível' ? 'text-green-600 font-medium' : 'text-gray-700'}`}>
                    {row.wednesday}
                  </td>
                  <td className={`border border-gray-300 px-4 py-3 ${row.thursday === 'Disponível' ? 'text-green-600 font-medium' : 'text-gray-700'}`}>
                    {row.thursday}
                  </td>
                  <td className={`border border-gray-300 px-4 py-3 ${row.friday === 'Disponível' ? 'text-green-600 font-medium' : 'text-gray-700'}`}>
                    {row.friday}
                  </td>
                  <td className={`border border-gray-300 px-4 py-3 ${row.saturday === 'Disponível' ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                    {row.saturday}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span className="text-gray-700">Disponível</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span className="text-gray-700">Ocupado</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <em>Horários sujeitos a alteração. Entre em contato para confirmar disponibilidade.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
