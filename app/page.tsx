"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import alc from "@/public/images/111.jpg";
import { Metadata } from "next";

// import dynamic from "next/dynamic";
import { useState } from "react";
// import _ from "lodash";
// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading</p>,
// });
export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <h1>hello!!!{session && <span>{session.user!.name}</span>}</h1> */}
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Set
      </button>
      {/* {isVisible && <HeavyComponent />} */}

      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>

      {/* <Image
        src="https://bit.ly/react-cover"
        alt="alc"
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw,(max-width:768px) 50vw,33vw"
        quality={100}
      /> */}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   return {
//     title: "product.title",
//     description: "...",
//   };
// }
