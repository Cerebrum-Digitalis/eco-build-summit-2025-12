
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Share2, Calendar, Mail } from "lucide-react";

const ConfirmationPage = ({ registrationData }) => {
  const eventDetails = {
    title: "Seminário: O Poder das Tecnologias e Leis de Direitos Sociais na Revolução Socioambiental",
    date: "2025-07-30",
    time: "14:00",
    endTime: "18:00",
    location: "Auditório de Eventos do Centro Comercial de Alphaville, Barueri-SP"
  };

  const handleAddToGoogleCalendar = () => {
    const startDate = `${eventDetails.date.replace(/-/g, '')}T140000`;
    const endDate = `${eventDetails.date.replace(/-/g, '')}T180000`;
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent('Evento sobre tecnologias e direitos sociais na construção civil')}&location=${encodeURIComponent(eventDetails.location)}`;
    window.open(url, '_blank');
  };

  const handleAddToAppleCalendar = () => {
    const startDate = `${eventDetails.date}T14:00:00`;
    const endDate = `${eventDetails.date}T18:00:00`;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Sinergias//Event//EN
BEGIN:VEVENT
UID:seminario-sinergias-${Date.now()}@sinergias.com.br
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${startDate.replace(/[-:]/g, '')}00Z
DTEND:${endDate.replace(/[-:]/g, '')}00Z
SUMMARY:${eventDetails.title}
DESCRIPTION:Evento sobre tecnologias e direitos sociais na construção civil
LOCATION:${eventDetails.location}
BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:Lembrete do evento
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'seminario-sinergias.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleShareWhatsApp = () => {
    const message = `Olá! Acabei de me inscrever no seminário "O Poder das Tecnologias e Leis de Direitos Sociais na Revolução Socioambiental" que acontecerá no dia 30 de julho de 2025, das 14h às 18h, no Auditório de Eventos do Centro Comercial de Alphaville. Você também deveria participar! É um evento importante para quem trabalha com construção civil e tecnologia. Que tal se inscrever também?`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleShareEmail = () => {
    const subject = "Convite para seminário sobre tecnologias na construção civil";
    const body = `Olá!

Acabei de me inscrever no seminário "O Poder das Tecnologias e Leis de Direitos Sociais na Revolução Socioambiental Através da Construção Civil" e queria te convidar também!

📅 Data: 30 de julho de 2025
🕐 Horário: das 14h às 18h
📍 Local: Auditório de Eventos do Centro Comercial de Alphaville, Barueri-SP

O evento é voltado para empresas de construção civil, empreiteiras, telecomunicações, provedores, tecnologias, veículos elétricos, investidores e entusiastas.

É uma oportunidade única para conhecer as novas tecnologias que estão revolucionando o setor, como conectividade 5G, pontos de recarga para veículos elétricos, automação predial e energias renováveis.

Vale muito a pena participar!

Para mais informações: contato@sinergias.com.br

Abraços!`;

    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/lovable-uploads/d609bb51-97e2-47b6-86f7-0b9d8f092631.png" 
            alt="Logo Sinergias" 
            className="h-16 w-auto mx-auto"
          />
        </div>

        {/* Confirmação Principal */}
        <Card className="shadow-2xl mb-8">
          <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg py-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-200" />
            </div>
            <CardTitle className="text-4xl font-bold mb-2">
              Parabéns, {registrationData?.fullName}!
            </CardTitle>
            <p className="text-xl text-green-100">
              Sua inscrição foi confirmada com sucesso!
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Este será um evento especial e transformador!
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Você está garantido no seminário mais importante sobre tecnologias e direitos sociais 
                na construção civil. Em breve, você receberá mais informações por e-mail e WhatsApp.
              </p>
            </div>

            {/* Resumo da Inscrição */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Detalhes da sua inscrição:</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Nome:</strong> {registrationData?.fullName}</p>
                <p><strong>E-mail:</strong> {registrationData?.email}</p>
                <p><strong>WhatsApp:</strong> {registrationData?.whatsapp}</p>
                {registrationData?.hasCompanion === "sim" && (
                  <>
                    <p><strong>Acompanhante:</strong> {registrationData?.companionName}</p>
                    <p><strong>Relacionamento:</strong> {registrationData?.relationship}</p>
                  </>
                )}
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Adicionar à Agenda */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Adicionar à Agenda
                </h4>
                <div className="space-y-3">
                  <Button 
                    onClick={handleAddToGoogleCalendar}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Google Calendar
                  </Button>
                  <Button 
                    onClick={handleAddToAppleCalendar}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white"
                  >
                    Apple Calendar / Outros
                  </Button>
                </div>
              </div>

              {/* Convidar Outros */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Share2 className="h-5 w-5" />
                  Convide Alguém
                </h4>
                <div className="space-y-3">
                  <Button 
                    onClick={handleShareWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Compartilhar via WhatsApp
                  </Button>
                  <Button 
                    onClick={handleShareEmail}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Convidar por E-mail
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informações do Evento */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              Lembre-se: 30 de Julho de 2025, das 14h às 18h
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              Auditório de Eventos do Centro Comercial de Alphaville, Barueri-SP
            </p>
            <a 
              href="https://maps.app.goo.gl/wbCfArs8g4ymfGjz5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              Ver localização no Google Maps
            </a>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-2">Dúvidas? Entre em contato:</p>
              <a 
                href="mailto:contato@sinergias.com.br" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                contato@sinergias.com.br
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmationPage;
