import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="w-full max-w-2xl mt-4 px-1 mx-auto">
      <nav className="bg-white w-full h-16 rounded-md flex items-center justify-between px-3">
        <div className=" flex gap-2 font-medium text-lg cursor-pointer">
          <Link to={"/"}>Home</Link>
          <Link to={"/admin"}>Meus links</Link>
          <Link to={"/admin/social"}> Redes Sociais</Link>
        </div>
        <button>
          <BiLogOut size={32} color="red" className="cursor-pointer" />
        </button>
      </nav>
    </header>
  );
}
