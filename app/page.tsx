
export default function Page() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-5" >
      <a href="/login" className='font-extrabold decoration-solid hover:underline'> Iniciar session</a>
      <a href="/register" className='font-extrabold decoration-solid hover:underline'> Regístrate</a>
    </main>
  );
}
