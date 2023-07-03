/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ClientService } from "../client.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ClientCreateInput } from "./ClientCreateInput";
import { ClientWhereInput } from "./ClientWhereInput";
import { ClientWhereUniqueInput } from "./ClientWhereUniqueInput";
import { ClientFindManyArgs } from "./ClientFindManyArgs";
import { ClientUpdateInput } from "./ClientUpdateInput";
import { Client } from "./Client";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ClientControllerBase {
  constructor(
    protected readonly service: ClientService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Client })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ClientCreateInput,
  })
  async create(@common.Body() data: ClientCreateInput): Promise<Client> {
    return await this.service.create({
      data: {
        ...data,

        entity: data.entity
          ? {
              connect: data.entity,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        customerName: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,
        info: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Client] })
  @ApiNestedQuery(ClientFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Client[]> {
    const args = plainToClass(ClientFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        customerName: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,
        info: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        customerName: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,
        info: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ClientUpdateInput,
  })
  async update(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() data: ClientUpdateInput
  ): Promise<Client | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          entity: data.entity
            ? {
                connect: data.entity,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          customerName: true,

          entity: {
            select: {
              id: true,
            },
          },

          id: true,
          info: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Client })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Client | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          customerName: true,

          entity: {
            select: {
              id: true,
            },
          },

          id: true,
          info: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async findManyDocuments(
    @common.Req() request: Request,
    @common.Param() params: ClientWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        cashAccount: {
          select: {
            id: true,
          },
        },

        Client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        docType: true,
        dueDate: true,
        id: true,

        supplier: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async connectDocuments(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async updateDocuments(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "update",
    possession: "any",
  })
  async disconnectDocuments(
    @common.Param() params: ClientWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
