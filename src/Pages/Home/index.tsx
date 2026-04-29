import { Header } from "../../Components/Header";
import {
  getDocs,
  query,
  orderBy,
  getDoc,
  collection,
  doc,
} from "firebase/firestore";
import { db } from "../../Services/ConnectionFirebase";
import { useEffect, useState } from "react";
import { Social } from "../../Components/Social";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

interface LinksProps {
  id: string;
  name: string;
  url: string;
  bg: string;
  color: string;
}

interface SocialProps {
  facebook: string;
  instagram: string;
  youtube: string;
}

export function Home() {
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [social, setSocial] = useState<SocialProps>();

  // UseEffect para Pegar os Links
  useEffect(() => {
    // colocando as informações do banco
    function loadLinks() {
      const LinkRef = collection(db, "Links");
      const queryRef = query(LinkRef, orderBy("data", "desc"));
      getDocs(queryRef).then((snapshot) => {
        let lista = [] as LinksProps[];
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
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function LoadSocial() {
      const docRef = doc(db, "Social", "Rede");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.exists()) {
          setSocial({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data().instagram,
            youtube: snapshot.data().youtube,
          });
        }
      });
    }
    LoadSocial();
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <Header />
      <h1 className=" md:text-4xl  text-5xl font-bold text-white mt-20  mb-5 ">
        Meus Links
      </h1>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        {links &&
          links.map((item) => (
            <section
              className="bg-green-300 mb-4 w-full py-2 font-bold text-1xl rounded-lg select-none transition-transform  hover:scale-105 cursor-pointer"
              style={{ background: item.bg, color: item.color }}
            >
              <p>
                <a href={item.url} target="_blank">
                  {item.name}
                </a>
              </p>
            </section>
          ))}
        {social && Object.keys(social).length > 0 && (
          <footer className="flex gap-1.5 my-1 justify-center ">
            <Social url={social.facebook}>
              <FaFacebook size={35} color="white" />
            </Social>
            <Social url={social?.instagram}>
              <FaInstagram size={35} color="white" />
            </Social>
            <Social url={social?.youtube}>
              <FaYoutube size={35} color="white" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}
