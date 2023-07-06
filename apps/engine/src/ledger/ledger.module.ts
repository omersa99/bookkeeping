import { Module } from "@nestjs/common";
import { LedgerModuleBase } from "./base/ledger.module.base";
import { LedgerService } from "./ledger.service";
import { LedgerController } from "./ledger.controller";
import { LedgerResolver } from "./ledger.resolver";

@Module({
  imports: [LedgerModuleBase],
  controllers: [LedgerController],
  providers: [LedgerService, LedgerResolver],
  exports: [LedgerService],
})
export class LedgerModule {}
