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
import { CreateInvoiceModelArgs } from "./CreateInvoiceModelArgs";
import { UpdateInvoiceModelArgs } from "./UpdateInvoiceModelArgs";
import { DeleteInvoiceModelArgs } from "./DeleteInvoiceModelArgs";
import { InvoiceModelCountArgs } from "./InvoiceModelCountArgs";
import { InvoiceModelFindManyArgs } from "./InvoiceModelFindManyArgs";
import { InvoiceModelFindUniqueArgs } from "./InvoiceModelFindUniqueArgs";
import { InvoiceModel } from "./InvoiceModel";
import { Account } from "../../account/base/Account";
import { Customer } from "../../customer/base/Customer";
import { Ledger } from "../../ledger/base/Ledger";
import { InvoiceModelService } from "../invoiceModel.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InvoiceModel)
export class InvoiceModelResolverBase {
  constructor(
    protected readonly service: InvoiceModelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "read",
    possession: "any",
  })
  async _invoiceModelsMeta(
    @graphql.Args() args: InvoiceModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InvoiceModel])
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "read",
    possession: "any",
  })
  async invoiceModels(
    @graphql.Args() args: InvoiceModelFindManyArgs
  ): Promise<InvoiceModel[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InvoiceModel, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "read",
    possession: "own",
  })
  async invoiceModel(
    @graphql.Args() args: InvoiceModelFindUniqueArgs
  ): Promise<InvoiceModel | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvoiceModel)
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "create",
    possession: "any",
  })
  async createInvoiceModel(
    @graphql.Args() args: CreateInvoiceModelArgs
  ): Promise<InvoiceModel> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        cashAccount: args.data.cashAccount
          ? {
              connect: args.data.cashAccount,
            }
          : undefined,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,

        ledger: args.data.ledger
          ? {
              connect: args.data.ledger,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InvoiceModel)
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "update",
    possession: "any",
  })
  async updateInvoiceModel(
    @graphql.Args() args: UpdateInvoiceModelArgs
  ): Promise<InvoiceModel | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          cashAccount: args.data.cashAccount
            ? {
                connect: args.data.cashAccount,
              }
            : undefined,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,

          ledger: args.data.ledger
            ? {
                connect: args.data.ledger,
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

  @graphql.Mutation(() => InvoiceModel)
  @nestAccessControl.UseRoles({
    resource: "InvoiceModel",
    action: "delete",
    possession: "any",
  })
  async deleteInvoiceModel(
    @graphql.Args() args: DeleteInvoiceModelArgs
  ): Promise<InvoiceModel | null> {
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
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "cashAccount",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async resolveFieldCashAccount(
    @graphql.Parent() parent: InvoiceModel
  ): Promise<Account | null> {
    const result = await this.service.getCashAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async resolveFieldCustomer(
    @graphql.Parent() parent: InvoiceModel
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Ledger, {
    nullable: true,
    name: "ledger",
  })
  @nestAccessControl.UseRoles({
    resource: "Ledger",
    action: "read",
    possession: "any",
  })
  async resolveFieldLedger(
    @graphql.Parent() parent: InvoiceModel
  ): Promise<Ledger | null> {
    const result = await this.service.getLedger(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
