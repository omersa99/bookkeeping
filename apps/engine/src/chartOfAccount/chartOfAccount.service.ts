import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChartOfAccountServiceBase } from "./base/chartOfAccount.service.base";

@Injectable()
export class ChartOfAccountService extends ChartOfAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
