import { Module } from "@nestjs/common";
import { MetaModuleBase } from "./base/meta.module.base";
import { MetaService } from "./meta.service";
import { MetaController } from "./meta.controller";
import { MetaResolver } from "./meta.resolver";

@Module({
  imports: [MetaModuleBase],
  controllers: [MetaController],
  providers: [MetaService, MetaResolver],
  exports: [MetaService],
})
export class MetaModule {}
