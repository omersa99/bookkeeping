import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DocumentService } from "./document.service";
import { DocumentControllerBase } from "./base/document.controller.base";
import * as errors from "../errors";
import { Document } from "./base/Document";
import { DocumentFindUniqueArgs } from "./base/DocumentFindUniqueArgs";
import { AclValidateRequestInterceptor } from "../interceptors/aclValidateRequest.interceptor";
import { DocumentWhereUniqueInput } from "./base/DocumentWhereUniqueInput";




@swagger.ApiTags("documents")
@common.Controller("documents")
export class DocumentController extends DocumentControllerBase {
  constructor(
    protected readonly service: DocumentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
    @common.Patch("/:id/status")
      @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async markDone(
    @common.Param() params: DocumentWhereUniqueInput,
  ): Promise<Document | null> {
    const result = await this.service.markDone({
      where: params,
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }
}
