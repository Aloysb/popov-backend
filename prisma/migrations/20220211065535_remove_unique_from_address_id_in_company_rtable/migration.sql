-- DropIndex
DROP INDEX "Company_addressId_key";

-- AlterTable
ALTER TABLE "Lead" ALTER COLUMN "lastCommunication" DROP NOT NULL,
ALTER COLUMN "lastCommunication" SET DATA TYPE DATE;
