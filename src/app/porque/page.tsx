"use client"
import { Header } from "@/components/header";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Porque() {
  return (
   <>
   <Header/>
 <section className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Por que o Amor & Esperança?
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed text-justify">
        O <strong>Amor & Esperança</strong> nasceu como uma{" "}
        <strong>atividade extensionista</strong> para unir conhecimento acadêmico
        e responsabilidade social. Vivemos em uma sociedade marcada por
        desigualdades, onde muitas pessoas não têm acesso ao básico — alimento,
        abrigo e acolhimento humano.  
        Nosso propósito é ser uma resposta a essa realidade: transformar a dor em
        cuidado, o descaso em solidariedade e a indiferença em amor.
      </p>

      {/* Carrossel de imagens */}
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-2xl shadow-lg"
        >
          <SwiperSlide>
            <img
              src="/images/acao1.jpg"
              alt="Entrega de alimentos"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/acao2.jpg"
              alt="Voluntários ajudando"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/acao3.jpg"
              alt="Crianças recebendo apoio"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="border-2 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Nosso Propósito
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li>Combater a fome com empatia e responsabilidade.</li>
          <li>Resgatar a dignidade de quem muitas vezes foi esquecido.</li>
          <li>Inspirar uma cultura de solidariedade e transformação.</li>
        </ul>
      </div>

      <div className="text-center border-2 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold mb-3">
          Seja um Colaborador 💖
        </h2>
        <p className="text-gray-700 mb-4">
          Sua colaboração pode transformar uma vida.  
          Participe do projeto e ajude a espalhar mais amor e esperança!
        </p>
        <Link
          href="https://api.whatsapp.com/send/?phone=55419889644343&text&type=phone_number&app_absent=0" target='_blank'

          className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition"
        >
          Quero Colaborar
        </Link>
      </div>
    </section>
   </>
  );
}
