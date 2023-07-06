import { Module } from "@nestjs/common";
import { ChartOfAccountModuleBase } from "./base/chartOfAccount.module.base";
import { ChartOfAccountService } from "./chartOfAccount.service";
import { ChartOfAccountController } from "./chartOfAccount.controller";
import { ChartOfAccountResolver } from "./chartOfAccount.resolver";

@Module({
  imports: [ChartOfAccountModuleBase],
  controllers: [ChartOfAccountController],
  providers: [ChartOfAccountService, ChartOfAccountResolver],
  exports: [ChartOfAccountService],
})
export class ChartOfAccountModule {}
