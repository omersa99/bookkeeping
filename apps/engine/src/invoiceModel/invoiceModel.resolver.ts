import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InvoiceModelResolverBase } from "./base/invoiceModel.resolver.base";
import { InvoiceModel } from "./base/InvoiceModel";
import { InvoiceModelService } from "./invoiceModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvoiceModel)
export class InvoiceModelResolver extends InvoiceModelResolverBase {
  constructor(
    protected readonly service: InvoiceModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
