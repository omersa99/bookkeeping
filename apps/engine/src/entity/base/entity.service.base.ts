/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Entity,
  Account,
  Customer,
  InvoiceModel,
  Item,
  Journal,
  User,
} from "@prisma/client";

export class EntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EntityCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityCountArgs>
  ): Promise<number> {
    return this.prisma.entity.count(args);
  }

  async findMany<T extends Prisma.EntityFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityFindManyArgs>
  ): Promise<Entity[]> {
    return this.prisma.entity.findMany(args);
  }
  async findOne<T extends Prisma.EntityFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityFindUniqueArgs>
  ): Promise<Entity | null> {
    return this.prisma.entity.findUnique(args);
  }
  async create<T extends Prisma.EntityCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityCreateArgs>
  ): Promise<Entity> {
    return this.prisma.entity.create<T>(args);
  }
  async update<T extends Prisma.EntityUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityUpdateArgs>
  ): Promise<Entity> {
    return this.prisma.entity.update<T>(args);
  }
  async delete<T extends Prisma.EntityDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EntityDeleteArgs>
  ): Promise<Entity> {
    return this.prisma.entity.delete(args);
  }

  async findAccounts(
    parentId: string,
    args: Prisma.AccountFindManyArgs
  ): Promise<Account[]> {
    return this.prisma.entity
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .accounts(args);
  }

  async findCustomers(
    parentId: string,
    args: Prisma.CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.prisma.entity
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .customers(args);
  }

  async findInvoiceModels(
    parentId: string,
    args: Prisma.InvoiceModelFindManyArgs
  ): Promise<InvoiceModel[]> {
    return this.prisma.entity
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .invoiceModels(args);
  }

  async findItems(
    parentId: string,
    args: Prisma.ItemFindManyArgs
  ): Promise<Item[]> {
    return this.prisma.entity
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .items(args);
  }

  async findJournals(
    parentId: string,
    args: Prisma.JournalFindManyArgs
  ): Promise<Journal[]> {
    return this.prisma.entity
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .journals(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.entity
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
