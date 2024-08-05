"use client";
import React from "react";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

function NavBar() {
  //useSession = nos permite saber si estamos autenticados o no
  const { data: session } = useSession();
  //ver datos de la sesion
  console.log(session);

  return (
    <nav className="flex justify-between items-center p-4 px-16 bg-gray-goo text-white bg-slate-600">
      <section className="w-20">
        <Link href="/">
          <h1>LOGO</h1>
        </Link>
      </section>
      {session?.user ? (
        <section
          className="flex gap-4 justify-center items-center"
          translate="no"
        >
          <Link href="/dashboard">Dashboard</Link>
          <p>{session.user.name} {session.user.email}</p>
          <img src={session.user.image as string} alt="" className="w-10 h-10 rounded-full cursor-pointer"/>
          <button onClick={()=> signOut({
            callbackUrl: "/"
          })} className="bg-white text-slate-600 px-4 py-1 rounded-2xl">Sign Out</button>
        </section>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-white text-slate-600 px-4 py-1 rounded-2xl"
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default NavBar;
