import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex flex-col items-center justify-center bg-bone-50 px-6 text-center">
      <p className="eyebrow text-granada-700 mb-6">404 · Mesón Alegría</p>
      <h1 className="display-italic text-[clamp(3rem,8vw,7rem)] text-granada-800 max-w-[14ch]">
        Esa mesa no existe
      </h1>
      <p className="mt-8 max-w-md text-ink-700 text-[15px]">
        Pero la brasa sigue encendida. Vuelve a la entrada y te recibimos como
        siempre.
      </p>
      <Link href="/es" className="btn-ember mt-10">
        Volver al Mesón
      </Link>
    </main>
  );
}
