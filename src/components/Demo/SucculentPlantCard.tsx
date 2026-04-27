export function SucculentPlantCard() {
  return (
    <div className="grid gap-0 grid-cols-1 md:grid-cols-2 w-full text-left rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm">
      
      {/* --- COLUMNA 1: La Planta --- */}
      {/* Fondo ajustado a un tono crema muy sutil como en la imagen */}
      <div className="relative flex flex-col items-center justify-center bg-[#FDFCFB] px-6 py-8 col-span-1">
        <div 
          className="pointer-events-none absolute inset-0" 
          style={{ background: 'radial-gradient(circle at 50% 60%, rgba(74,124,89,0.04) 0%, transparent 60%)' }}
        />
        
        <div className="relative flex flex-col items-center gap-4">
          <button className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-[#1B3B6F] transition-all hover:shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf h-3 w-3 text-[#4A7C59]" aria-hidden="true">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
            Suculenta
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right h-3 w-3 text-gray-400 transition-transform duration-200" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <button className="group relative cursor-pointer rounded-2xl p-2 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7C59] focus-visible:ring-offset-2" aria-label="Toca la planta para aprender sobre el cambio climatico">
            <div 
              className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-700 group-hover:opacity-90" 
              style={{ background: 'radial-gradient(circle at 50% 70%, rgba(74,124,89,0.15) 0%, transparent 65%)', opacity: 0.7 }}
            />
            <svg width="180" height="220" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-sm transition-all duration-700" role="img" aria-label="Planta en etapa: Floreciendo">
              <rect x="70" y="172" width="60" height="7" rx="3.5" fill="#8D6E63" />
              <path d="M76 179 L80 212 L120 212 L124 179 Z" fill="#8D6E63" opacity="0.85" />
              <path d="M80 212 L83 220 L117 220 L120 212 Z" fill="#795548" opacity="0.65" />
              <ellipse cx="100" cy="176" rx="23" ry="3" fill="#A1887F" opacity="0.2" />
              <ellipse cx="100" cy="176" rx="22" ry="4" fill="#4E342E" opacity="0.4" />
              <path d="M100 174 Q100.2 142 99.6 100" stroke="#2E7D32" strokeWidth="2.4" strokeLinecap="round" fill="none" className="transition-all duration-1000" />
              <g opacity="0.88" className="transition-all duration-700">
                <ellipse cx="115" cy="160" rx="14" ry="6.2" fill="#1B5E20" transform="rotate(-20 115 160)" />
                <ellipse cx="84" cy="158" rx="12.2" ry="5.3" fill="#1B5E20" opacity="0.85" transform="rotate(25 84 158)" />
              </g>
              <g opacity="0.88" className="transition-all duration-700">
                <ellipse cx="118" cy="143" rx="13" ry="5.9" fill="#3D8B37" transform="rotate(-30 118 143)" />
                <ellipse cx="81" cy="140" rx="11.2" ry="5" fill="#3D8B37" opacity="0.85" transform="rotate(35 81 140)" />
              </g>
              <g opacity="0.93" className="transition-all duration-700">
                <ellipse cx="116" cy="124" rx="12" ry="6" fill="#2E7D32" transform="rotate(-25 116 124)" />
                <ellipse cx="83" cy="121" rx="10.2" ry="5.1" fill="#2E7D32" opacity="0.85" transform="rotate(30 83 121)" />
              </g>
              <g opacity="0.98" className="transition-all duration-700">
                <ellipse cx="112" cy="106" rx="10.2" ry="5.1" fill="#1B5E20" transform="rotate(-35 112 106)" />
                <ellipse cx="87" cy="104" rx="8.4" ry="4.2" fill="#1B5E20" opacity="0.85" transform="rotate(40 87 104)" />
              </g>
            </svg>
            <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-[#4A7C59]/0 transition-all duration-300 group-hover:border-[#4A7C59]/15" />
          </button>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#4A7C59]">Floreciendo</span>
            <div className="flex gap-1">
              <div className="h-1 rounded-full transition-all duration-500" style={{ width: '16px', backgroundColor: '#4A7C59' }} />
              <div className="h-1 rounded-full transition-all duration-500" style={{ width: '16px', backgroundColor: '#4A7C59' }} />
              <div className="h-1 rounded-full transition-all duration-500" style={{ width: '16px', backgroundColor: '#4A7C59' }} />
              <div className="h-1 rounded-full transition-all duration-500" style={{ width: '16px', backgroundColor: '#4A7C59' }} />
              <div className="h-1 rounded-full transition-all duration-500" style={{ width: '6px', backgroundColor: '#E2DDD4' }} />
            </div>
            <p className="text-[11px] text-gray-400">Toca para un dato sobre el clima</p>
          </div>
        </div>
      </div>

      {/* --- COLUMNA 2: Impacto y Gamificación --- */}
      <div className="flex flex-col justify-center gap-6 p-8 col-span-1 bg-white">
        <div>
          {/* Bronce */}
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#A0522D]">Bienvenido de vuelta</p>
          {/* Azul oscuro */}
          <h1 className="font-serif font-bold italic text-balance text-4xl text-[#1B3B6F] mt-1">Tu impacto ambiental</h1>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2F0]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets h-7 w-7 text-[#4A7C59]" aria-hidden="true">
                <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
                <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
              </svg>
            </div>
            <div>
              {/* Bronce */}
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#A0522D] mb-1">Litros ahorrados</p>
              <div className="flex items-baseline gap-1">
                {/* Azul oscuro */}
                <span className="font-serif text-5xl font-bold italic tabular-nums leading-none text-[#1B3B6F] md:text-6xl">7200</span>
                <span className="text-xl font-medium text-[#4A7C59]">L</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {/* Fondo gris claro */}
            <div className="rounded-xl bg-[#F4F5F7] px-4 py-3">
              <p className="text-xl font-bold text-[#4A7C59]">3</p>
              <p className="text-[11px] leading-snug text-gray-500 mt-1">camisetas no fabricadas</p>
            </div>
            {/* Fondo gris claro */}
            <div className="rounded-xl bg-[#F4F5F7] px-4 py-3">
              <p className="text-xl font-bold text-[#1B3B6F]">1</p>
              <p className="text-[11px] leading-snug text-gray-500 mt-1">jeans no producidos</p>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-200 mt-2" />

        <div className="w-full mt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ background: '#FAF5F2', border: '1px solid #E8D5CA' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4" aria-hidden="true" style={{ color: '#A0522D' }}>
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#A0522D' }}>Bronce</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11px] text-gray-500">Siguiente: <span className="font-bold text-[#6B7D8D]">Plata</span></span>
                <span className="text-[12px] font-bold" style={{ color: '#A0522D' }}>72%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                <div className="h-full rounded-full transition-all duration-1000 ease-out bg-[#A0522D]" style={{ width: '72%' }} />
              </div>
              <p className="mt-1.5 text-[10px] text-gray-500">Faltan <span className="font-bold text-[#1B3B6F]">2801</span> litros para Plata</p>
            </div>
          </div>

          <div className="mt-6 flex gap-1">
            <div className="relative flex flex-1 flex-col items-center gap-1.5 rounded-xl py-3 transition-all duration-300 bg-[#FAF5F2]">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A0522D]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4 text-white" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A0522D]">Bronce</span>
              <span className="text-[9px] text-gray-500 font-medium">1</span>
              <div className="absolute -top-0.5 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-[#A0522D]" />
            </div>

            <div className="relative flex flex-1 flex-col items-center gap-1.5 rounded-lg py-3 transition-all duration-300 opacity-60">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4 text-gray-300" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Plata</span>
              <span className="text-[9px] text-gray-300 font-medium">10.001</span>
            </div>

            <div className="relative flex flex-1 flex-col items-center gap-1.5 rounded-lg py-3 transition-all duration-300 opacity-60">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4 text-gray-300" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Oro</span>
              <span className="text-[9px] text-gray-300 font-medium">25.001</span>
            </div>

            <div className="relative flex flex-1 flex-col items-center gap-1.5 rounded-lg py-3 transition-all duration-300 opacity-60">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F4F6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-4 w-4 text-gray-300" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">Platino</span>
              <span className="text-[9px] text-gray-300 font-medium">150.000+</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}