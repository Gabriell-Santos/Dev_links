import { Input } from "../../Components/Input";
import { Header } from "../../Components/Header";
import { useState } from "react";
export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#000000");

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
        <section className="flex mx-auto gap-5 mt-3.5 mb-3">
          <div className=" flex items-center gap-2  ">
            <label className=" text-lg text-white font-bold ">
              Cor do Texto :
            </label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
            />
          </div>
          <div className=" flex items-center gap-2">
            <label className=" text-lg text-white font-bold ">
              Cor de Fundo :
            </label>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
        </section>
        <div className=" flex items-center  justify-center flex-col mb-7 p-1 border-2 border-gray-500 rounded-lg mt-8 pb-5 ">
          <label className=" text-white font-bold mt-4 py-2 text-lg">
            Veja como está ficando seu link
          </label>
          <article
            className="w-11/12 max-w-lg flex flex-col items-center justify-center gap-2 px-3 py-4 text-xl rounded-2xl"
            style={{
              marginBottom: 8,
              marginTop: 8,
              backgroundColor: backgroundColor,
            }}
          >
            <p className="text-2 " style={{ color: textColor }}>
              Canal no Youtube
            </p>
          </article>
        </div>
      </form>
    </div>
  );
}
