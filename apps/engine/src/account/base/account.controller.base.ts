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
import { AccountService } from "../account.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AccountCreateInput } from "./AccountCreateInput";
import { AccountWhereInput } from "./AccountWhereInput";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountUpdateInput } from "./AccountUpdateInput";
import { Account } from "./Account";
import { EntityFindManyArgs } from "../../entity/base/EntityFindManyArgs";
import { Entity } from "../../entity/base/Entity";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AccountControllerBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Account })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: AccountCreateInput): Promise<Account> {
    return await this.service.create({
      data: data,
      select: {
        balanceType: true,
        code: true,
        createdAt: true,
        id: true,
        name: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Account] })
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Account[]> {
    const args = plainToClass(AccountFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        balanceType: true,
        code: true,
        createdAt: true,
        id: true,
        name: true,
        role: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        balanceType: true,
        code: true,
        createdAt: true,
        id: true,
        name: true,
        role: true,
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
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() data: AccountUpdateInput
  ): Promise<Account | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          balanceType: true,
          code: true,
          createdAt: true,
          id: true,
          name: true,
          role: true,
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
  @swagger.ApiOkResponse({ type: Account })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Account | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          balanceType: true,
          code: true,
          createdAt: true,
          id: true,
          name: true,
          role: true,
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
  @common.Get("/:id/entity")
  @ApiNestedQuery(EntityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "any",
  })
  async findManyEntity(
    @common.Req() request: Request,
    @common.Param() params: AccountWhereUniqueInput
  ): Promise<Entity[]> {
    const query = plainToClass(EntityFindManyArgs, request.query);
    const results = await this.service.findEntity(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/entity")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async connectEntity(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entity: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/entity")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateEntity(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entity: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/entity")
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async disconnectEntity(
    @common.Param() params: AccountWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entity: {
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
