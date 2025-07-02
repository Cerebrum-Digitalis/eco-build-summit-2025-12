
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import RegistrationForm from "@/components/RegistrationForm";
import ConfirmationPage from "@/components/ConfirmationPage";

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState(null);
  const { toast } = useToast();

  const handleRegistrationComplete = (data) => {
    setRegistrationData(data);
    setIsRegistered(true);
    toast({
      title: "Inscrição realizada com sucesso!",
      description: "Você receberá mais informações em breve.",
    });
  };

  if (isRegistered) {
    return <ConfirmationPage registrationData={registrationData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header com Logo */}
      <header className="relative w-full">
        <div className="absolute top-6 right-6 z-10">
          <img 
            src="/lovable-uploads/123c711e-9af3-4c71-ba6e-2ee1410b86b9.png" 
            alt="Logo Sinergias" 
            className="h-12 w-auto drop-shadow-lg"
          />
        </div>
        
        {/* Hero Section com Imagem de Fundo */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-90"
            style={{
              backgroundImage: `url('/lovable-uploads/1cbce8a3-08a7-43a9-ba07-84aa589f1587.png')`,
              backgroundPosition: 'center 25%'
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)] stroke-black stroke-2">
              O Poder das Tecnologias e Leis de Direitos Sociais na Revolução Socioambiental
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-300 bg-black/60 px-6 py-3 rounded-xl drop-shadow-2xl border-2 border-yellow-400/30 backdrop-blur-sm [text-shadow:_2px_2px_4px_rgb(0_0_0_/_90%)] inline-block">
              Através da Construção Civil
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white drop-shadow-2xl bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-white/20 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_90%)]">
              Diminua seus custos e entre mais valor! Porque seu próximo projeto exigirá conectividade 5G, 
              pontos de recarga para veículos elétricos, automação predial, energias renováveis e mais! 
              Neste evento, você encontrará os parceiros para viabilizar isso. Não perca a chance de 
              dominar a nova era da construção e do desenvolvimento urbano.
            </p>
          </div>
        </section>
      </header>

      {/* Informações do Evento */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Calendar className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">30 de Julho de 2025</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">14h às 18h</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <MapPin className="h-12 w-12 text-red-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  Auditório de Eventos do Centro Comercial de Alphaville
                </p>
                <p className="text-gray-600 mb-4">Barueri-SP</p>
                <a 
                  href="https://maps.app.goo.gl/wbCfArs8g4ymfGjz5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Ver no Google Maps
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Público-Alvo */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Para Quem é Este Evento?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Empresas de Construção Civil",
                "Empreiteiras",
                "Telecomunicações",
                "Provedores",
                "Tecnologias",
                "Veículos Elétricos",
                "Engenheiros",
                "Arquitetos"
              ].map((audience, index) => (
                <div key={index} className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg text-center">
                  <p className="font-semibold text-gray-700">{audience}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário de Inscrição */}
          <RegistrationForm onRegistrationComplete={handleRegistrationComplete} />

          {/* Contato */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Tire Dúvidas, Fale Conosco</h3>
            <a 
              href="mailto:contato@sinergias.com.br" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              <Mail className="h-5 w-5" />
              contato@sinergias.com.br
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
