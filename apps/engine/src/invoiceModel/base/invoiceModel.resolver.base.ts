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
import { ItemTransaction } from "../../itemTransaction/base/ItemTransaction";
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

        itemTransactions: args.data.itemTransactions
          ? {
              connect: args.data.itemTransactions,
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

          itemTransactions: args.data.itemTransactions
            ? {
                connect: args.data.itemTransactions,
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
  @graphql.ResolveField(() => ItemTransaction, {
    nullable: true,
    name: "itemTransactions",
  })
  @nestAccessControl.UseRoles({
    resource: "ItemTransaction",
    action: "read",
    possession: "any",
  })
  async resolveFieldItemTransactions(
    @graphql.Parent() parent: InvoiceModel
  ): Promise<ItemTransaction | null> {
    const result = await this.service.getItemTransactions(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
