import { library } from "@/app/mocks/books.json";
import BookList from "@/components/BookList";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" p-2 font-normal w-full bg-gradient-to-br from-slate-950 to-slate-700">
      <div className=" flex flex-col justify-center items-center">
        {" "}
        <h1 className=" text-3xl text-red-700">
          A<b className=" text-white">TOM</b>
        </h1>
        <p className=" m-auto text-6xl text-balance tracking-tight text-white ">
          Welcome to my Online Library
        </p>
      </div>
      <div>
        <BookList />
      </div>
      <main className=" w-full m-auto tracking-wide">
        <ul className=" grid grid-cols-4 py-2 font-normal text-xl m-auto gap-7">
          {library.map((lib) => (
            <li
              key={lib.book.title}
              className=" text-white cursor-pointer w-full flex flex-col gap-3 items-center bg-slate-800/10 ring-1 ring-slate-700 hover:ring-slate-500 hover:shadow-lg hover:shadow-slate-900"
            >
              <div className=" w-full">
                <Image
                  src={lib.book.cover}
                  alt={lib.book.synopsis}
                  width={300}
                  height={50}
                  className=" mx-auto py-2"
                />
              </div>
              <div className=" flex flex-col justify-center items-center pb-3">
                <div className=" w-[300px] flex flex-col justify-center gap-2 pb-3">
                  <p className=" self-center">
                    <b>{lib.book.title}</b>
                  </p>
                  <p>{lib.book.author.name}</p>
                  <p className=" self-end">
                    <span>{lib.book.year}</span> - <span>{lib.book.genre}</span>
                  </p>
                  <p className=" text-center text-balance">
                    {lib.book.synopsis}
                  </p>
                  <p className=" self-center">
                    <b>ISNB: </b>
                    {lib.book.ISBN}
                  </p>
                </div>
                <button className=" p-2 bg-slate-950 text-white font-semibold rounded-lg">
                  Add
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
