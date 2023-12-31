/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateEntityArgs } from "./CreateEntityArgs";
import { UpdateEntityArgs } from "./UpdateEntityArgs";
import { DeleteEntityArgs } from "./DeleteEntityArgs";
import { EntityCountArgs } from "./EntityCountArgs";
import { EntityFindManyArgs } from "./EntityFindManyArgs";
import { EntityFindUniqueArgs } from "./EntityFindUniqueArgs";
import { Entity } from "./Entity";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { InvoiceModelFindManyArgs } from "../../invoiceModel/base/InvoiceModelFindManyArgs";
import { InvoiceModel } from "../../invoiceModel/base/InvoiceModel";
import { ItemFindManyArgs } from "../../item/base/ItemFindManyArgs";
import { Item } from "../../item/base/Item";
import { LedgerFindManyArgs } from "../../ledger/base/LedgerFindManyArgs";
import { Ledger } from "../../ledger/base/Ledger";
import { User } from "../../user/base/User";
import { EntityService } from "../entity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Entity)
export class EntityResolverBase {
  constructor(
    protected readonly service: EntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "any",
  })
  async _entitiesMeta(
    @graphql.Args() args: EntityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Entity])
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "any",
  })
  async entities(@graphql.Args() args: EntityFindManyArgs): Promise<Entity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Entity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "read",
    possession: "own",
  })
  async entity(
    @graphql.Args() args: EntityFindUniqueArgs
  ): Promise<Entity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Entity)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "create",
    possession: "any",
  })
  async createEntity(@graphql.Args() args: CreateEntityArgs): Promise<Entity> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Entity)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "update",
    possession: "any",
  })
  async updateEntity(
    @graphql.Args() args: UpdateEntityArgs
  ): Promise<Entity | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Entity)
  @nestAccessControl.UseRoles({
    resource: "Entity",
    action: "delete",
    possession: "any",
  })
  async deleteEntity(
    @graphql.Args() args: DeleteEntityArgs
  ): Promise<Entity | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Account], { name: "accounts" })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async resolveFieldAccounts(
    @graphql.Parent() parent: Entity,
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    const results = await this.service.findAccounts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Customer], { name: "customers" })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async resolveFieldCustomers(
    @graphql.Parent() parent: Entity,
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    const results = await this.service.findCustomers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [InvoiceModel], { name: "invoiceModels" })
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "read",
    possession: "any",
  })
  async resolveFieldInvoiceModels(
    @graphql.Parent() parent: Entity,
    @graphql.Args() args: InvoiceModelFindManyArgs
  ): Promise<InvoiceModel[]> {
    const results = await this.service.findInvoiceModels(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Item], { name: "items" })
  @nestAccessControl.UseRoles({
    resource: "Item",
    action: "read",
    possession: "any",
  })
  async resolveFieldItems(
    @graphql.Parent() parent: Entity,
    @graphql.Args() args: ItemFindManyArgs
  ): Promise<Item[]> {
    const results = await this.service.findItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Ledger], { name: "ledgers" })
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "any",
  })
  async resolveFieldLedgers(
    @graphql.Parent() parent: Entity,
    @graphql.Args() args: LedgerFindManyArgs
  ): Promise<Ledger[]> {
    const results = await this.service.findLedgers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUser(
    @graphql.Parent() parent: Entity
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
