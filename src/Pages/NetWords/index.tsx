import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { db } from "../../Services/ConnectionFirebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
export function NetWords() {
  const [facebook, setFacebook] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [youtube, setYoutube] = useState<string>("");

  // Buscar os links do Firestore quando o componente for montado
  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "Social", "Rede");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.exists()) {
          setFacebook(snapshot.data()?.facebook);
          setInstagram(snapshot.data()?.instagram);
          setYoutube(snapshot.data()?.youtube);
        }
      });
    }
    loadLinks();
  }, []);

  // Função para lidar com o envio do formulário
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      facebook.trim() === "" ||
      instagram.trim() === "" ||
      youtube.trim() === ""
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    setDoc(doc(db, "Social", "Rede"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
    })
      .then(() => {
        alert("Links salvos com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h2 className=" font-bold text-4xl mt-11 text-white mb-4 ">
        Minhas Redes Sociais
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-8 w-full max-w-xl mb-3 "
      >
        <label className="text-lg text-white font-bold mt-3">
          Link do Facebook
        </label>
        <Input
          placeholder="Digite o link do Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="text-lg text-white font-bold mt-3">
          Link do Instagram
        </label>
        <Input
          placeholder="Digite o link do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <label className="text-lg text-white font-bold mt-3">
          Link do Youtube
        </label>
        <Input
          placeholder="Digite o link do Youtube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <button
          type="submit"
          className="p-4 bg-blue-500 mt-5 rounded-xl text-2xl font-bold text-white"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
