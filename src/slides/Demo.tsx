import { SlideContainer } from '../components/SlideContainer'
import { Headline } from '../components/Headline'

// PASO 1: Haz una captura de pantalla de tu web (indigo-web-demo.vercel.app)
// guárdala en la carpeta src/assets/ con el nombre "demo-screenshot.png"
// y luego descomenta la siguiente línea:
// import demoImg from '../assets/demo-screenshot.png'

export function Demo() {
  return (
    <SlideContainer background="surface" slideNumber={00}>
      <Headline>
        Demo en Vivo
      </Headline>

      {/* 💻 VISTA DE PANTALLA: Iframe interactivo (Se oculta al exportar a PDF) */}
      <div className="flex-1 w-full mt-5 mb-5 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-md print:hidden">
        <iframe 
          src="https://indigo-web-demo.vercel.app/#vender"
          title="IndiGo Web Demo"
          className="w-full h-full border-none block"
        />
      </div>

      {/* 🖨️ VISTA DE IMPRESIÓN (PDF): Imagen estática (Se oculta en la web) */}
      <div className="hidden print:flex flex-1 w-full mt-5 rounded-xl overflow-hidden border border-slate-200 bg-gray-50 flex-col items-center justify-center">
        
        {/* PASO 2: Descomenta esta línea cuando tengas la imagen lista para que salga en el PDF */}
        {/* <img src={demoImg} alt="Demo Web" className="w-full h-full object-cover object-top" /> */}
        
        {/* Este es un diseño temporal que saldrá en tu PDF si no pones la imagen */}
        <div className="text-center p-8">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="font-sans text-xl text-black uppercase tracking-widest mb-2">Prototipo Interactivo</h3>
          <p className="font-sans text-gray-500 mb-6 text-sm">indigo-web-demo.vercel.app</p>
          <div className="bg-black text-white px-6 py-2 text-xs uppercase tracking-widest inline-block">
            Ver Demo en Vivo
          </div>
        </div>
        
      </div>
    </SlideContainer>
  )
}