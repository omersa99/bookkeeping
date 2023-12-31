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
  InvoiceModel,
  Item,
  Customer,
  Entity,
  Ledger,
} from "@prisma/client";

export class InvoiceModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InvoiceModelCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceModelCountArgs>
  ): Promise<number> {
    return this.prisma.invoiceModel.count(args);
  }

  async findMany<T extends Prisma.InvoiceModelFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceModelFindManyArgs>
  ): Promise<InvoiceModel[]> {
    return this.prisma.invoiceModel.findMany(args);
  }
  async findOne<T extends Prisma.InvoiceModelFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceModelFindUniqueArgs>
  ): Promise<InvoiceModel | null> {
    return this.prisma.invoiceModel.findUnique(args);
  }
  async create<T extends Prisma.InvoiceModelCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceModelCreateArgs>
  ): Promise<InvoiceModel> {
    return this.prisma.invoiceModel.create<T>(args);
  }
  async update<T extends Prisma.InvoiceModelUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceModelUpdateArgs>
  ): Promise<InvoiceModel> {
    return this.prisma.invoiceModel.update<T>(args);
  }
  async delete<T extends Prisma.InvoiceModelDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceModelDeleteArgs>
  ): Promise<InvoiceModel> {
    return this.prisma.invoiceModel.delete(args);
  }

  async findItem(
    parentId: string,
    args: Prisma.ItemFindManyArgs
  ): Promise<Item[]> {
    return this.prisma.invoiceModel
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .item(args);
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.invoiceModel
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getEntity(parentId: string): Promise<Entity | null> {
    return this.prisma.invoiceModel
      .findUnique({
        where: { id: parentId },
      })
      .entity();
  }

  async getLedger(parentId: string): Promise<Ledger | null> {
    return this.prisma.invoiceModel
      .findUnique({
        where: { id: parentId },
      })
      .ledger();
  }
}
