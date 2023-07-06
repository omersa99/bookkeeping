import { Module } from "@nestjs/common";
import { ItemTransactionModuleBase } from "./base/itemTransaction.module.base";
import { ItemTransactionService } from "./itemTransaction.service";
import { ItemTransactionController } from "./itemTransaction.controller";
import { ItemTransactionResolver } from "./itemTransaction.resolver";

@Module({
  imports: [ItemTransactionModuleBase],
  controllers: [ItemTransactionController],
  providers: [ItemTransactionService, ItemTransactionResolver],
  exports: [ItemTransactionService],
})
export class ItemTransactionModule {}
