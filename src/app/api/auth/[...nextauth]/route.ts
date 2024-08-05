/*
---------------CONFIGURACION BACKEND ⚙💻----------
Estos es lo que nos va a permitir comunicarnos con los servicios
de nustros proveedores, En este caso google.  
*/


import NextAuth from "next-auth";
//importamos el provider que vamos a utilizar ej: google
import GoogleProvider from "next-auth/providers/google";

//ejecutamos NextAuth
const handler = NextAuth({
    //providers = con que servicios vamos a autenticar
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
})

//exportamos el handler como una peticion GET y POST
export { handler as GET, handler as POST }