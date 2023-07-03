import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MetaService } from "./meta.service";
import { MetaControllerBase } from "./base/meta.controller.base";

@swagger.ApiTags("metas")
@common.Controller("metas")
export class MetaController extends MetaControllerBase {
  constructor(
    protected readonly service: MetaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
