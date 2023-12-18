import Heading from '@/components/Heading'
import ListWebs from '@/components/ListWebs'

export default function Home() {
  return (
    <>
      <Heading/>

      <section className='gap-5 p-10 text-center'>
        <h1 className='text-secondary font-bold text-xl'>🚀Descubre proyectos y servicios increíbles🚀</h1>
        <p className='text-secondary'>Comparta sus creaciones con todo el mundo y descubra proyectos increíbles realizados por la comunidad</p>
      </section>

      <ListWebs/>
    </>
  )
}
