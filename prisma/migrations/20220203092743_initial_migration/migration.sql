-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "companyId" INTEGER,
    "firstName" TEXT NOT NULL,
    "lastCommunication" TIMESTAMP NOT NULL,
    "lastName" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "addressId" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "alias" TEXT,
    "city" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "street" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_addressId_key" ON "Company"("addressId");

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
