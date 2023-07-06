import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvoiceModelServiceBase } from "./base/invoiceModel.service.base";

@Injectable()
export class InvoiceModelService extends InvoiceModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
