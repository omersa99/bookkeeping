-- CreateEnum
CREATE TYPE "EnumItemItemRole" AS ENUM ('Expense', 'Inventory', 'Service', 'Product');

-- CreateEnum
CREATE TYPE "EnumTransactionTransactionType" AS ENUM ('Credit', 'Debit');

-- CreateEnum
CREATE TYPE "EnumAccountDefaultAccountType" AS ENUM ('Debit', 'Credit');

-- CreateEnum
CREATE TYPE "EnumMetaPaymentType" AS ENUM ('WithoutType', 'Cash', 'CreditCard');

-- CreateEnum
CREATE TYPE "EnumDocumentDocType" AS ENUM ('Invoice', 'Receipt', 'Bill');

-- CreateEnum
CREATE TYPE "EnumDocumentStatus" AS ENUM ('Draft', 'Approved', 'Paid', 'Canceled');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "accrualMethod" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "info" JSONB,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "active" BOOLEAN,
    "additionalInfo" TEXT,
    "Amount" TEXT,
    "cogsAccount" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "earningsAccount" TEXT,
    "entityId" TEXT,
    "expenseAccount" TEXT,
    "id" TEXT NOT NULL,
    "inventoryAccount" TEXT,
    "itemRole" "EnumItemItemRole",
    "itemType" TEXT,
    "name" TEXT,
    "price" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "accountId" TEXT,
    "amount" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "transactionType" "EnumTransactionTransactionType",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "active" BOOLEAN,
    "code" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DefaultAccountType" "EnumAccountDefaultAccountType",
    "id" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerName" TEXT,
    "entityId" TEXT,
    "id" TEXT NOT NULL,
    "info" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meta" (
    "active" BOOLEAN,
    "bankAccount" TEXT,
    "category" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "paymentTerms" TEXT,
    "paymentType" "EnumMetaPaymentType",
    "taxId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "cashAccount" TEXT,
    "ClientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "docType" "EnumDocumentDocType",
    "dueDate" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "prepaidAccount" TEXT,
    "status" "EnumDocumentStatus",
    "supplierId" TEXT,
    "unearnedAccount" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "active" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DocumentToItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Entity_usersId_key" ON "Entity"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "_DocumentToItem_AB_unique" ON "_DocumentToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_DocumentToItem_B_index" ON "_DocumentToItem"("B");

-- AddForeignKey
ALTER TABLE "Entity" ADD CONSTRAINT "Entity_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentToItem" ADD CONSTRAINT "_DocumentToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DocumentToItem" ADD CONSTRAINT "_DocumentToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
