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
import { EntityService } from "../entity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EntityCreateInput } from "./EntityCreateInput";
import { EntityWhereInput } from "./EntityWhereInput";
import { EntityWhereUniqueInput } from "./EntityWhereUniqueInput";
import { EntityFindManyArgs } from "./EntityFindManyArgs";
import { EntityUpdateInput } from "./EntityUpdateInput";
import { Entity } from "./Entity";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { InvoiceModelFindManyArgs } from "../../invoiceModel/base/InvoiceModelFindManyArgs";
import { InvoiceModel } from "../../invoiceModel/base/InvoiceModel";
import { InvoiceModelWhereUniqueInput } from "../../invoiceModel/base/InvoiceModelWhereUniqueInput";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";
import { LedgerFindManyArgs } from "../../ledger/base/LedgerFindManyArgs";
import { Ledger } from "../../ledger/base/Ledger";
import { LedgerWhereUniqueInput } from "../../ledger/base/LedgerWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EntityControllerBase {
  constructor(
    protected readonly service: EntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Entity })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: EntityCreateInput): Promise<Entity> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        accountingType: true,
        address: true,
        createdAt: true,
        deductionId: true,
        deductionRate: true,
        exemption: true,
        id: true,
        name: true,
        taxId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Entity] })
  @ApiNestedQuery(EntityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Entity[]> {
    const args = plainToClass(EntityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        accountingType: true,
        address: true,
        createdAt: true,
        deductionId: true,
        deductionRate: true,
        exemption: true,
        id: true,
        name: true,
        taxId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Entity | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        accountingType: true,
        address: true,
        createdAt: true,
        deductionId: true,
        deductionRate: true,
        exemption: true,
        id: true,
        name: true,
        taxId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() data: EntityUpdateInput
  ): Promise<Entity | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          accountingType: true,
          address: true,
          createdAt: true,
          deductionId: true,
          deductionRate: true,
          exemption: true,
          id: true,
          name: true,
          taxId: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Entity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Entity | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accountingType: true,
          address: true,
          createdAt: true,
          deductionId: true,
          deductionRate: true,
          exemption: true,
          id: true,
          name: true,
          taxId: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @common.Get("/:id/accounts")
  @ApiNestedQuery(AccountFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async findManyAccounts(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Account[]> {
    const query = plainToClass(AccountFindManyArgs, request.query);
    const results = await this.service.findAccounts(params.id, {
      ...query,
      select: {
        balance: true,
        balanceType: true,
        code: true,
        createdAt: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        role: true,
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

  @common.Post("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async connectAccounts(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async updateAccounts(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/accounts")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async disconnectAccounts(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: AccountWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      accounts: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/customers")
  @ApiNestedQuery(CustomerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async findManyCustomers(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Customer[]> {
    const query = plainToClass(CustomerFindManyArgs, request.query);
    const results = await this.service.findCustomers(params.id, {
      ...query,
      select: {
        active: true,
        createdAt: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        salesTaxRate: true,
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

  @common.Post("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async connectCustomers(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async updateCustomers(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customers")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async disconnectCustomers(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/invoiceModels")
  @ApiNestedQuery(InvoiceModelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "read",
    possession: "any",
  })
  async findManyInvoiceModels(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<InvoiceModel[]> {
    const query = plainToClass(InvoiceModelFindManyArgs, request.query);
    const results = await this.service.findInvoiceModels(params.id, {
      ...query,
      select: {
        amountDue: true,
        amountPaid: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        entity: {
          select: {
            id: true,
          },
        },

        id: true,
        info: true,
        invoiceNumber: true,
        invoiceStatus: true,

        item: {
          select: {
            id: true,
          },
        },

        itemUnits: true,

        ledger: {
          select: {
            id: true,
          },
        },

        pricePerUnit: true,
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

  @common.Post("/:id/invoiceModels")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async connectInvoiceModels(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: InvoiceModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoiceModels: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/invoiceModels")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async updateInvoiceModels(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: InvoiceModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoiceModels: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/invoiceModels")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async disconnectInvoiceModels(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: InvoiceModelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      invoiceModels: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/items")
  @ApiNestedQuery(ItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async findManyItems(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Item[]> {
    const query = plainToClass(ItemFindManyArgs, request.query);
    const results = await this.service.findItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,

        invoiceModels: {
          select: {
            id: true,
          },
        },

        name: true,
        price: true,
        pricePerUnit: true,
        quantity: true,
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

  @common.Post("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async connectItems(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async updateItems(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/items")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async disconnectItems(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: ItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      items: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/ledgers")
  @ApiNestedQuery(LedgerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "any",
  })
  async findManyLedgers(
    @common.Req() request: Request,
    @common.Param() params: EntityWhereUniqueInput
  ): Promise<Ledger[]> {
    const query = plainToClass(LedgerFindManyArgs, request.query);
    const results = await this.service.findLedgers(params.id, {
      ...query,
      select: {
        createdAt: true,

        entity: {
          select: {
            id: true,
          },
        },

        id: true,

        invoiceModels: {
          select: {
            id: true,
          },
        },

        name: true,
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

  @common.Post("/:id/ledgers")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async connectLedgers(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: LedgerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ledgers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ledgers")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async updateLedgers(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: LedgerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ledgers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ledgers")
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async disconnectLedgers(
    @common.Param() params: EntityWhereUniqueInput,
    @common.Body() body: LedgerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ledgers: {
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
