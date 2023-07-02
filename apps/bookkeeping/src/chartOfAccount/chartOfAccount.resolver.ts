import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChartOfAccountResolverBase } from "./base/chartOfAccount.resolver.base";
import { ChartOfAccount } from "./base/ChartOfAccount";
import { ChartOfAccountService } from "./chartOfAccount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChartOfAccount)
export class ChartOfAccountResolver extends ChartOfAccountResolverBase {
  constructor(
    protected readonly service: ChartOfAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
