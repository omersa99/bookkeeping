import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MetaServiceBase } from "./base/meta.service.base";

@Injectable()
export class MetaService extends MetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
