import { Input } from "../../Components/Input";
import { Header } from "../../Components/Header";
import { useState } from "react";
export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <form className="flex flex-col mt-8 w-full max-w-xl mb-3  ">
        <label className=" text-lg text-white font-bold mt-3 ">
          Nome do Link
        </label>
        <Input
          placeholder="Digite o nome do link"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label className=" text-lg text-white font-bold mt-5">
          Nome da URL
        </label>
        <Input
          value={urlInput}
          type="url"
          placeholder="Digite a URL do link.."
          onChange={(e) => setUrlInput(e.target.value)}
        />
      </form>
    </div>
  );
}
