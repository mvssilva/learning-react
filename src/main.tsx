import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Filter from './components/Filter'
import Card from './components/Card'
import Info from './components/Info'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col h-screen bg-[#F4FBFF] justify-between">
      <Header/>
      <main className='flex-1 max-w-300 m-auto w-full'>
        <Filter title = 'Busque o conteúdo que deseja assitir hoje' />
        <div className='bg-white rounded-md py-2 mt-4'>
          <p className='text-[#00A2F7] font-bold text-center'>
            Os cursos mais buscados
          </p>
          <div className='grid grid-cols-4 gap-2 mt-3'>
            <Card logo='./react.png' titulo='Fundamentos do React.Js' cargahoraria = '9h'/>
            <Card logo='./Next.png' titulo='Fundamentos do Next.Js' cargahoraria = '12h'/>
            <Card logo='./node.png' titulo='Fundamentos do Node.Js' cargahoraria = '10h'/>
            <Card logo='./Vector.png' titulo='Curso TailwindCSS' cargahoraria = '6h'/>                       
          </div>
        </div>
        <Info/>
      </main>
      <Footer/>
    </div>
  </StrictMode>,
)
