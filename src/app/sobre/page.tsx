"use client"

import { Header } from "@/components/header";

export default function Sobre() {
  return (
    <>
    <Header/>
           <section className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center ">
        Sobre o Amor & Esperança
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed">
        O <strong>Amor & Esperança</strong> é um projeto que nasceu a partir de
        uma <strong>atividade extensionista</strong>, unindo conhecimento
        acadêmico e compromisso social. Seu propósito é transformar vidas por
        meio de gestos simples, mas cheios de significado.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        Nossa missão é oferecer apoio, alimento e acolhimento para pessoas em
        situação de vulnerabilidade. Mais do que doar, buscamos criar conexões
        humanas e espalhar o amor que move mudanças reais.
      </p>

      <div className="border p-4 rounded-2xl">
        <h2 className="text-2xl font-semibold  mb-2">
          Nossos Valores
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Solidariedade como base de todas as ações.</li>
          <li>Respeito e dignidade para todos.</li>
          <li>Transparência e responsabilidade social.</li>
        </ul>
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        Cada contribuição é um passo para um futuro mais justo. Junte-se a nós
        e faça parte dessa corrente de amor e esperança. 💖
      </p>
    </section>
    </>
 
  );
}
