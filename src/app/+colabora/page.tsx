import { Header } from '@/components/header'
import Link from 'next/link'

export default function Porque() {
    return (
        <>
            <Header />
            <section className="max-w-3xl mx-auto p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center">Por que o Amor & Esperança?</h1>

                <p className="text-lg text-gray-700 leading-relaxed">
                    Vivemos em um mundo cheio de desigualdades, onde muitas pessoas não têm acesso ao básico: alimento, abrigo e acolhimento humano. É diante dessa realidade que o{' '}
                    <strong>Amor & Esperança</strong> se faz necessário.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                    O projeto nasceu como resposta a um chamado: transformar a dor em ação, o descaso em cuidado, e a indiferença em solidariedade. Não buscamos apenas suprir
                    necessidades imediatas, mas também plantar sementes de dignidade e esperança.
                </p>

                <div className="border p-4 rounded-2xl">
                    <h2 className="text-2xl font-semibol mb-2">Nosso Propósito</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Combater a fome com empatia e responsabilidade.</li>
                        <li>Resgatar a dignidade de quem muitas vezes foi esquecido.</li>
                        <li>Inspirar uma cultura de solidariedade e transformação.</li>
                    </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                    O “porquê” do Amor & Esperança é simples, mas profundo: acreditamos que juntos podemos fazer diferença, devolvendo a cada pessoa o direito de sonhar e viver com
                    dignidade. ✨
                </p>

                <div className="text-center border p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold  mb-3">Seja um Colaborador 💖</h2>
                    <p className="text-gray-700 mb-4">Sua colaboração pode transformar uma vida. Participe do projeto e ajude a espalhar mais amor e esperança!</p>
                    <Link href="" className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition">
                        Quero Colaborar
                    </Link>
                </div>
            </section>
        </>
    )
}
