
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

const RegistrationForm = ({ onRegistrationComplete }) => {
  const [hasCompanion, setHasCompanion] = useState("");
  const { toast } = useToast();
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Dados da inscrição:', data);
    onRegistrationComplete(data);
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-xl">
      <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-3xl font-bold">Confirme Sua Presença</CardTitle>
        <p className="text-green-100 mt-2">Garante sua vaga neste evento exclusivo!</p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome Completo */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-lg font-semibold">
              Nome Completo *
            </Label>
            <Input
              id="fullName"
              {...register("fullName", { required: "Nome completo é obrigatório" })}
              placeholder="Digite seu nome completo"
              className="text-lg p-3"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message as string}</p>
            )}
          </div>

          {/* E-mail */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg font-semibold">
              E-mail *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { 
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido"
                }
              })}
              placeholder="seu@email.com"
              className="text-lg p-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message as string}</p>
            )}
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-lg font-semibold">
              WhatsApp *
            </Label>
            <Input
              id="whatsapp"
              {...register("whatsapp", { required: "WhatsApp é obrigatório" })}
              placeholder="(11) 99999-9999"
              className="text-lg p-3"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-sm">{errors.whatsapp.message as string}</p>
            )}
          </div>

          {/* Vai levar acompanhante */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Vai levar acompanhante?</Label>
            <RadioGroup
              value={hasCompanion}
              onValueChange={(value) => {
                setHasCompanion(value);
                setValue("hasCompanion", value);
              }}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="sim" />
                <Label htmlFor="sim" className="text-lg">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nao" id="nao" />
                <Label htmlFor="nao" className="text-lg">Não</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Campos do acompanhante (aparecem apenas se "Sim" for selecionado) */}
          {hasCompanion === "sim" && (
            <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800">Dados do Acompanhante</h4>
              
              {/* Nome do acompanhante */}
              <div className="space-y-2">
                <Label htmlFor="companionName" className="text-lg font-semibold">
                  Nome do Acompanhante *
                </Label>
                <Input
                  id="companionName"
                  {...register("companionName", { 
                    required: hasCompanion === "sim" ? "Nome do acompanhante é obrigatório" : false 
                  })}
                  placeholder="Digite o nome do acompanhante"
                  className="text-lg p-3"
                />
                {errors.companionName && (
                  <p className="text-red-500 text-sm">{errors.companionName.message as string}</p>
                )}
              </div>

              {/* Grau de relacionamento */}
              <div className="space-y-2">
                <Label htmlFor="relationship" className="text-lg font-semibold">
                  Grau de Relacionamento *
                </Label>
                <Select onValueChange={(value) => setValue("relationship", value)}>
                  <SelectTrigger className="text-lg p-3">
                    <SelectValue placeholder="Selecione o relacionamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="familiar">Familiar</SelectItem>
                    <SelectItem value="profissional">Profissional</SelectItem>
                    <SelectItem value="amistoso">Amistoso</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Botão de Inscrição */}
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-xl py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Confirmar Inscrição Gratuita
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegistrationForm;
