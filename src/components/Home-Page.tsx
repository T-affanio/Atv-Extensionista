"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Hero Component
const Hero = () => (
    <section className="container max-w-7xl flex flex-col md:flex-row items-center justify-center mx-auto md:h-[80vh] p-4">
        <div className="md:flex-1 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 mt-4">Amor&Esperança</h1>
            <h3 className="text-lg text-center text-gray-800 mt-2 font-semibold mb-3">Compartilhe o que sobra. Transforme o que falta.</h3>
            <p className="text-gray-800 text-lg mt-2 leading-relaxed">
                Todos os dias, milhares de famílias enfrentam a dura realidade da fome e da falta de recursos básicos. Enquanto alguns têm suas mesas cheias, outros ainda lutam pelo
                essencial.
            </p>
            <p className="text-gray-800 text-lg mt-4 leading-relaxed">
                O <b className="font-bold text-black">Amor&Esperança</b> nasceu para mudar essa realidade — e você pode fazer parte dessa transformação, levando alimento e esperança
                a quem mais precisa.
            </p>
        </div>
        <div className="md:flex-1 flex justify-center">
            <Image src="/images/logo.png" alt="logo" width={500} height={500} className="w-full " />
        </div>
    </section>
)

// Mission Component
const Mission = () => (
    <section className="container max-w-7xl flex flex-col items-center mx-auto mb-10 border-b-2 p-4">
        <h2 className="md:text-5xl font-bold text-center mb-6">Nossa missão</h2>
        <ul className="text-lg text-gray-800 space-y-3 md:space-y-4 list-disc list-inside">
            <li>
                <span className="font-bold text-black">Garantir o básico:</span> entregar cestas de alimentos nutritivos para que nenhuma mesa fique vazia.
            </li>
            <li>
                <span className="font-bold text-black">Gerar impacto humano:</span> mostrar que cada pessoa importa e que ninguém está sozinho em sua luta.
            </li>
            <li>
                <span className="font-bold text-black">Construir pontes de solidariedade:</span> conectar quem pode ajudar com quem mais precisa receber apoio.
            </li>
            <li>
                <span className="font-bold text-black">Inspirar mudança:</span> fortalecer a cultura da empatia, incentivando mais pessoas a praticarem o bem.
            </li>
        </ul>
        <p className="text-center mt-6 text-lg font-semibold leading-relaxed">
            No Amor&Esperança, acreditamos que a solidariedade é a força capaz de transformar vidas. Nossa missão vai além de entregar alimentos: queremos levar dignidade,
            acolhimento e esperança a famílias que enfrentam a fome e a vulnerabilidade social.
        </p>
    </section>
)

// HowToHelp Component
const HowToHelp = () => (
    <section className="py-12 ">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold  mb-10">🤲 Como você pode ajudar</h2>
            <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                    <span className="text-5xl mb-4">🥖</span>
                    <h3 className="text-xl font-semibold mb-2">Doe uma cesta básica</h3>
                    <p className="text-gray-600 text-sm md:text-base">Um gesto simples que garante alimento e esperança para uma família inteira.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                    <span className="text-5xl mb-4">🤝</span>
                    <h3 className="text-xl font-semibold mb-2">Contribua financeiramente</h3>
                    <p className="text-gray-600 text-sm md:text-base">Cada valor doado é transformado em alimentos e chega direto a quem mais precisa.</p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-center text-center">
                    <span className="text-5xl mb-4">📦</span>
                    <h3 className="text-xl font-semibold mb-2">Seja voluntário</h3>
                    <p className="text-gray-600 text-sm md:text-base">Doe seu tempo ajudando na arrecadação, organização e distribuição das doações.</p>
                </div>
            </div>
        </div>
    </section>
)

// CallToAction Component
const CallToAction = () => (
    <section className="py-16 ">
        <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sua doação pode transformar uma vida hoje</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Um pequeno gesto pode significar <b>um prato cheio, uma noite tranquila e a esperança renovada</b>.
            </p>
            <a href="https://api.whatsapp.com/send/?phone=55419889644343&text&type=phone_number&app_absent=0" target='_blank' className="inline-block px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-md hover:bg-red-700 transition">
                👉 Quero Ajudar Agora
            </a>
        </div>
    </section>
)

// Location Component

const Location = () => (
  <section className="py-12 ">
    <div className="max-w-3xl mx-auto text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        📍 Nosso Ponto de Arrecadação
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
        Venha nos visitar ou deixar sua doação no endereço abaixo:
      </p>
      <p className="text-lg font-semibold text-gray-800">
        Rua basilio benato – Bairro são joão batista, Almirante Tamandare – PR
      </p>
      <p className="text-gray-600 mt-2 mb-6">
        Horário de funcionamento:Qua a Sex, das 15h às 18h
      </p>

      {/* Mapa embutido */}
   

      {/* Botão para abrir no Google Maps */}
      <a
        href="https://maps.app.goo.gl/jiBie76163YyWf3U7"
        rel="noopener noreferrer"
        className="mt-6 inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition"
      >
        Ver no Google Maps
      </a>
    </div>
  </section>
);
// carrossel
const Carrossel = () => (
  <section className="container max-w-7xl flex flex-col items-center mx-auto mb-10  p-4 h-[80vh]">
  <div className="w-full h-full">
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      spaceBetween={20}
      slidesPerView={1}
      className="rounded-2xl shadow-xl"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-[80vh]">
          <img
            src="/images/logo.png"
            alt="Entrega de alimentos"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Entrega de Alimentos</h2>
            <p className="mb-4 text-lg md:text-2xl max-w-xl">Levando esperança e sustento para famílias em necessidade.</p>
            
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-[80vh]">
          <img
            src="/images/voluntario.jpg"
            alt="Voluntários ajudando"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Ação Voluntária</h2>
            <p className="mb-4 text-lg md:text-2xl max-w-xl">Unindo forças para transformar vidas através da solidariedade.</p>
          
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-[80vh]">
          <img
            src="images/kid .jpg"
            alt="Crianças recebendo apoio"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Apoio às Crianças</h2>
            <p className="mb-4 text-lg md:text-2xl max-w-xl">Cuidando do futuro através do carinho e da educação.</p>
            
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>


)



// Home Page
const HomePage = () => {
    return (
        <>
            <Hero />
            <Carrossel/>
            <Mission />
            <HowToHelp />
            <CallToAction />
            <Location/>
        </>
    )
}

export default HomePage
