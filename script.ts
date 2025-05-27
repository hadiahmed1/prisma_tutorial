import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

async function main() {
    //create
    await prisma.user.create({ data: { name: "Ahmed",email: "969hadiahmed@gmail.com" } })
    //read
    const user = await prisma.user.findMany();
    console.log(user);

}

main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })