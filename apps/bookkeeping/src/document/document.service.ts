import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentServiceBase } from "./base/document.service.base";
import { DocumentFindUniqueArgs } from "./base/DocumentFindUniqueArgs";
import { Document } from "./base/Document";
import { Transaction } from "src/transaction/base/Transaction";
import { Account } from "src/account/base/Account";
import {AccountWhereUniqueInput} from "src/account/base/AccountWhereUniqueInput"


@Injectable()
export class DocumentService extends DocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async markDone(args:DocumentFindUniqueArgs) {

    const doc = await this.prisma.document.update({
      where: args.where,
      data:{
        status:"Approved"
      }
    })
    const cashAccountID = doc.cashAccount || undefined
    // params :cashAccountID
    // cash_account = await this.prisma.account.findUnique(params)

    const cashAcc = await this.prisma.account.findFirst({
      where:{
        id : cashAccountID
      }
    })
    const documentType = doc.docType
    if (documentType === "Invoice")(
      await this.prisma.transaction.create({
        data:{
          transactionType: "Credit",
          amount: "100",
          account: {
            create:{
              name:"test account",
              role:"ASSET",
              DefaultAccountType:"Debit",
              code:"1006"
            }
          }
        }
      })
    )


    return doc
  }
}
