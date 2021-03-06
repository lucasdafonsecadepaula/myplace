import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
        clientId: "N5lkWIEn6MMBJeOvf41jAYfKH4QPMwZm",
        clientSecret: "10o0Fiom7YpZuZUaJVTyrQra0x0Mk7a2gbyWIwAU5pd20_-PGqlzk-wpxrq1yHl3",
        domain: "dev-zppxdmf9.us.auth0.com",
    })],
})