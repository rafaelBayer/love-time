import { useEffect, useState } from 'react'
import './App.css'
import { HeartAnimation } from './components/HeartAnimation'
import PolaroidPhoto from './components/PolaroidPhoto'
import TimeCounter from './components/TimeCounter'
import foto3 from '../public/foto-3.jpeg'
import foto6 from '../public/foto-6.jpeg'
import foto7 from '../public/foto-7.jpeg'
import foto4 from '../public/foto-4.jpeg'
import foto5 from '../public/foto-5.jpeg'
import foto1 from '../public/foto-1.jpeg'


function App() {
  const startDate = new Date("2023-03-04T00:00:00");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [])

  const memories = [
    {
      imageUrl: foto3,
      title: "Nosso Início",
      text: "Tudo começou em 4 de março de 2023. Desde aquele dia, cada momento juntos tem sido especial e único.",
      isRight: false,
    },
    {
      imageUrl: foto6,
      title: "Primeiros Passos",
      text: "Cada passo que demos juntos nos trouxe a este momento. Construímos memórias que vão durar para sempre.",
      isRight: true,
    },
    {
      imageUrl: foto7,
      title: "Aventuras",
      text: "Exploramos novos lugares e vivemos aventuras incríveis. Cada experiência nos aproximou ainda mais.",
      isRight: false
    },
    {
      imageUrl: foto4,
      title: "Descobertas",
      text: "Descobrimos tantas coisas juntos – sobre o mundo e sobre nós mesmos. Crescemos e evoluímos como um casal.",
      isRight: true
    },
    {
      imageUrl: foto5,
      title: "Momentos Simples",
      text: "Os momentos mais simples se tornaram os mais especiais quando estamos juntos. um filme, uma conversa...",
      isRight: false
    },
    {
      imageUrl: foto1,
      title: "Dois Anos",
      text: "Dois anos de amor, respeito e companheirismo. Este é apenas o começo da nossa jornada juntos.",
      isRight: true
    }
  ];

  return (
    <div className='bg-pink-300 min-h-screen relative overflow-hidden'>
      <HeartAnimation/>
      <div className={`container px-4 pt-12 pb-20 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <header className="text-center mb-8">
          <h1 className="font-cursive text-5xl md:text-6xl text-love-primary mb-3 animate-pulse-slow">Eu te Amo</h1>
          <p className="text-love-text text-xl">
            Celebrando nossa história de amor
          </p>
        </header>

        <div className="mb-12">
          <h2 className="text-center text-love-text text-xl mb-2">
            Este relógio marca o tempo que estamos juntos, desde 04 de março de 2023
          </h2>
          <TimeCounter startDate={startDate} />
        </div>

        <div className="max-w-4xl mx-auto">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className="memory-item"
            >
              <PolaroidPhoto
                imageUrl={memory.imageUrl}
                title={memory.title}
                text={memory.text}
                isRight={memory.isRight}
                width={memory.width}
                height={memory.height}
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
