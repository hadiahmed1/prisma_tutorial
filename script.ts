import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany();
    const user = await prisma.user.create({
        data: {
            name: "Hadi",
            age: 21,
            email: "969hadi@gmail.com",
            UserPrefrence: {
                create: {
                    emailUpdates: true
                }
            }
        },
        include: {
            UserPrefrence: true
        }
    });

    console.log(user);

}

main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })