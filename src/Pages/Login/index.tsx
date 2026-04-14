import { useState } from "react";
import { Input } from "../../Components/Input";
import { Link } from "react-router-dom";
export function Login() {
  // Chamando o useState
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  // Função para lidar com o submit do formulário
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({
      email: email,
      passWord: passWord,
    });
  }
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <Link to={"/"}>
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-2"
      >
        <Input
          placeholder="Digite seu Email...."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="********"
          value={passWord}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-orange-500 font-bold text-3xl mt-7 h-15 rounded-2xl text-white "
        >
          Acessar
        </button>
      </form>
    </div>
  );
}
