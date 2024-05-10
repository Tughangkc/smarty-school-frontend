import NextAuth from "next-auth"


const config = {
    providers: [],
    callbacks: {},
    pages: {}

}

export const {auth, signIn, signOut, handlers} = NextAuth(config)