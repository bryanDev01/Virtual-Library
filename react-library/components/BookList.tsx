'use client'

import { Library } from "lucide-react";
import { useState } from "react";

function BookList() {
    const [isInList, setIsInList] = useState<boolean>(false)

  return (
    <div className=" text-white">
      {" "}
      <div>BookList</div>
      <button className=" flex justify-center items-center w-16 bg-white rounded-lg">
        <Library className=" text-black w-28 h-8 cursor-pointer" />
      </button>
    </div>
  );
}

export default BookList;
