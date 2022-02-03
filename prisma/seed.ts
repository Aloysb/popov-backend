import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const jean = await prisma.lead.upsert({
    where: { email: 'jean@prisma.io' },
    update: {},
    create: {
      email: 'jean@prisma.io',
      firstName: 'jean',
      lastName: 'raoul',
      lastCommunication: new Date(2020, 12, 12),
      note: 'Jean a un chantier dans deux mois',
      phoneNumber: '061234567890',
      title: 'Chef de chantier',
      company: {
        create: {
          name: 'Jean Charpente',
          address: {
            create: {
              city: 'Bourg-en-bresse',
              postcode: '01000',
              street: '35 Jean jaures',
            },
          },
        },
      },
    },
  });

  const jeannette = await prisma.lead.upsert({
    where: { email: 'jeannette@prisma.io' },
    update: {},
    create: {
      email: 'jeannette@prisma.io',
      firstName: 'jeannette',
      lastName: 'raoul',
      lastCommunication: new Date(2021, 1, 12),
      note: 'La femme de jeanou',
      phoneNumber: '061234567890',
      title: 'Chef de chantier',
      company: {
        connectOrCreate: {
          where: {
            id: 1,
          },
          create: {
            name: 'Jean Charpente',
            address: {
              create: {
                city: 'Bourg-en-bresse',
                postcode: '01000',
                street: '35 Jean jaures',
              },
            },
          },
        },
      },
    },
  });

  const raoul = await prisma.lead.upsert({
    where: { email: 'raoul@prisma.io' },
    update: {},
    create: {
      email: 'raoul@prisma.io',
      firstName: 'raoul',
      lastName: 'rodriguez',
      lastCommunication: new Date(2022, 2, 12),
      note: 'Raoul, le vrai',
      phoneNumber: '061234567890',
      title: 'Macon',
      company: {
        connectOrCreate: {
          where: {
            id: 1,
          },
          create: {
            name: 'Raoul moelon',
            address: {
              create: {
                city: 'Bourg-en-bresse',
                postcode: '01000',
                street: '35 Jean jaures',
              },
            },
          },
        },
      },
    },
  });

  const patrick = await prisma.lead.upsert({
    where: { email: 'patrick@prisma.io' },
    update: {},
    create: {
      email: 'patrick@prisma.io',
      firstName: 'patrick',
      lastName: 'burger',
      lastCommunication: new Date(2021, 8, 12),
      note: 'Comptable en or',
      phoneNumber: '061234567890',
      title: 'Comptable',
      company: {
        connectOrCreate: {
          where: {
            id: 1,
          },
          create: {
            name: 'ASM',
            address: {
              create: {
                city: 'Thoirette-en-bresse',
                postcode: '39240',
                street: 'Chemin la boissiere',
              },
            },
          },
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
