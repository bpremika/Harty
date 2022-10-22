import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){
    const users = await prisma.users.findMany()
    console.log(users)
    
}

main()
    .catch(e=>{
        console.error(e.message)
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })

    