import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvoiceModelService } from "./invoiceModel.service";
import { InvoiceModelControllerBase } from "./base/invoiceModel.controller.base";

@swagger.ApiTags("invoiceModels")
@common.Controller("invoiceModels")
export class InvoiceModelController extends InvoiceModelControllerBase {
  constructor(
    protected readonly service: InvoiceModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
