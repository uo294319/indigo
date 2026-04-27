import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'
// Asegúrate de importar el componente que acabamos de crear con la ruta correcta
import { SucculentPlantCard } from '../components/Demo/SucculentPlantCard' 

export function Slide04_Marketplace() {
  return (
    <SlideContainer background="surface" slideNumber={4}>
      <Headline>
        Incremento: Marketplace + Gamificación + Fidelización.
      </Headline>

      {/* Contenedor principal que centra el componente en todo el espacio disponible */}
      <div className="flex-1 w-full mt-5 flex items-center justify-center">
        
        {/* Envoltorio para darle forma de "tarjeta" a la planta si no tiene fondo propio */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 bg-white">
          <SucculentPlantCard />
        </div>

      </div>
    </SlideContainer>
  )
}