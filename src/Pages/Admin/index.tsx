import { Input } from "../../Components/Input";
import { db } from "../../Services/ConnectionFirebase";
import {
  collection,
  addDoc,
  deleteDoc,
  onSnapshot,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { FiTrash } from "react-icons/fi";
import { Header } from "../../Components/Header";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [textColor, setTextColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [links, setLinks] = useState<LinkProps[]>([]);
  interface LinkProps {
    id: string;
    name: string;
    url: string;
    bg: string;
    color: string;
  }
  // Buscar os links do Firestore quando o componente for montado
  useEffect(() => {
    const LinkRef = collection(db, "Links");
    const queryRef = query(LinkRef, orderBy("data", "desc"));
    const unsub = onSnapshot(queryRef, (snapshot) => {
      const lista: LinkProps[] = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          bg: doc.data().bg,
          color: doc.data().color,
        });
      });
      setLinks(lista);
    });
    // Limpar o listener quando o componente for desmontado
    return () => unsub();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Verificar se os campos estão preenchidos
    if (nameInput.trim() === "" || urlInput.trim() === "") {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }
    // Adicionar o link ao Firestore
    try {
      const docRef = await addDoc(collection(db, "Links"), {
        name: nameInput,
        url: urlInput,
        bg: backgroundColor,
        color: textColor,
        data: new Date(),
      });
      // Limpar os campos após o envio
      toast.success("Link adicionado com sucesso!");
      setNameInput("");
      setUrlInput("");
    } catch (error) {
      console.error("Erro ao adicionar link: ", error);
    }
  }

  // Função para deletar um link
  async function handleDelete(id: string) {
    const docRef = doc(db, "Links", id);
    await deleteDoc(docRef);
    toast.success("Link deletado com Sucesso");
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-8 w-full max-w-xl mb-3  "
      >
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
        {nameInput !== "" && (
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
                {nameInput}
              </p>
            </article>
          </div>
        )}
        <button
          type="submit"
          className="bg-indigo-500 py-2 rounded-2xl font-bold text-lg mt-4 mb-4 items-center justify-center flex"
        >
          Cadastrar
        </button>
      </form>
      <h2 className="text-3xl font-bold mb-2 mt-1 text-amber-50">Meus Links</h2>
      {links.map((item) => (
        <section
          key={item.id}
          style={{ background: item.bg, color: item.color }}
          className="flex items-center justify-between w-11/12 max-w-lg rounded-lg mt-3 py-2.5 px-1.5 border bg-blue-200  text-black font-medium select-none cursor-pointer"
        >
          <p> {item.name} </p>
          <div>
            <button
              className="bg-neutral-800 border border-dotted rounded-lg p-2 cursor-pointer"
              onClick={() => handleDelete(item.id)}
            >
              <FiTrash size={25} color="white" />
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
