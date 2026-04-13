import { Social } from "../../Components/Social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export function Home() {
  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className=" md:text-4xl  text-5xl font-bold text-white mt-20 ">
        Meus Links
      </h1>
      <span className="text-white mb-5  mt-3 text-2xl">seus links salvos</span>
      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-green-300 mb-4 w-full py-2 font-bold text-1xl rounded-lg select-none transition-transform  hover:scale-105 cursor-pointer">
          <p>
            <a> Canal no Youtube </a>
          </p>
        </section>
        <footer className="flex gap-1.5 my-1 justify-center ">
          <Social url="https://www.youtube.com">
            <FaFacebook size={35} color="white" />
          </Social>
          <Social url="https://www.youtube.com">
            <FaInstagram size={35} color="white" />
          </Social>
          <Social url="https://www.youtube.com">
            <FaYoutube size={35} color="white" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
