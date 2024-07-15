
// import { prisma } from "@cowk8s/database";

// const checkDatabaseConnection = async () => {
//   try {
//     await prisma.$queryRaw`SELECT 1`;
//   } catch (e) {
//     console.error("Database connection error:", e);
//     throw new Error("Database could not be reached");
//   }
// };

const Page = async () => {
  // await checkDatabaseConnection();
  console.log(`hi ${process.env.DATABASE_URL}`);
  return (
    <div>
      <p>All systems are up and running: {process.env.DATABASE_URL}</p>
    </div>
  );
};

export default Page;
