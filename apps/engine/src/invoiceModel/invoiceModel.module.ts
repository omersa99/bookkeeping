import { Module } from "@nestjs/common";
import { InvoiceModelModuleBase } from "./base/invoiceModel.module.base";
import { InvoiceModelService } from "./invoiceModel.service";
import { InvoiceModelController } from "./invoiceModel.controller";
import { InvoiceModelResolver } from "./invoiceModel.resolver";

@Module({
  imports: [InvoiceModelModuleBase],
  controllers: [InvoiceModelController],
  providers: [InvoiceModelService, InvoiceModelResolver],
  exports: [InvoiceModelService],
})
export class InvoiceModelModule {}
