import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-amber-100 ">
      <h2 className="my-3 font-bold text-6xl text-amber-400 ">404</h2>
      <span className="text-2xl mb-5">Página não encontrada</span>
      <Link
        to={"/"}
        className="border p-4 text-xl font-bold rounded-xl hover:bg-black hover:text-white hover:cursor-pointer  "
      >
        Voltar Para a Home
      </Link>
    </div>
  );
}
