import { PrismaClient } from "@prisma/client"

declare gloobal {
    namespace globalThis {
        var prismadb: PrismaClient
    }
}