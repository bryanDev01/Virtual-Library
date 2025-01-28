import { library } from "@/app/mocks/books.json";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" p-2 m-auto font-normal w-full">
      <header className=" text-center text-2xl bg-cyan-200">
        {" "}
        Welcome to my Online Library of <b>-- ATOM --</b>
      </header>
      <main className=" w-full m-auto tracking-wide">
        <ul className=" grid grid-cols-4 py-2 font-normal text-xl m-auto gap-7">
          {library.map((lib) => (
            <li key={lib.book.title} className=" cursor-pointer w-full flex flex-col gap-3 items-center ring-1 ring-slate-300 hover:ring-slate-950 hover:shadow-md hover:shadow-slate-400">
              <div className=" w-full">
                <Image
                  src={lib.book.cover}
                  alt={lib.book.synopsis}
                  width={300}
                  height={50}
                  className=" mx-auto py-2"
                />
              </div>
              <div className=" w-[300px] flex flex-col justify-center gap-2 pb-3">
                <p className=" self-center"><b>{lib.book.title}</b></p>
                <p>{lib.book.author.name}</p>
                <p className=" self-end"><span>{lib.book.year}</span>{" "} - <span>{lib.book.genre}</span></p>
                <p className=" text-center text-balance">{lib.book.synopsis}</p>
                <p className=" self-center"><b>ISNB: </b>{lib.book.ISBN}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
