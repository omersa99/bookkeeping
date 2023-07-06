import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChartOfAccountService } from "./chartOfAccount.service";
import { ChartOfAccountControllerBase } from "./base/chartOfAccount.controller.base";

@swagger.ApiTags("chartOfAccounts")
@common.Controller("chartOfAccounts")
export class ChartOfAccountController extends ChartOfAccountControllerBase {
  constructor(
    protected readonly service: ChartOfAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
