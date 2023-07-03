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
import { CreateDocumentArgs } from "./CreateDocumentArgs";
import { UpdateDocumentArgs } from "./UpdateDocumentArgs";
import { DeleteDocumentArgs } from "./DeleteDocumentArgs";
import { DocumentCountArgs } from "./DocumentCountArgs";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentFindUniqueArgs } from "./DocumentFindUniqueArgs";
import { Document } from "./Document";
import { Client } from "../../client/base/Client";
import { DocumentService } from "../document.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Document)
export class DocumentResolverBase {
  constructor(
    protected readonly service: DocumentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async _documentsMeta(
    @graphql.Args() args: DocumentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Document])
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async documents(
    @graphql.Args() args: DocumentFindManyArgs
  ): Promise<Document[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Document, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "own",
  })
  async document(
    @graphql.Args() args: DocumentFindUniqueArgs
  ): Promise<Document | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Document)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "create",
    possession: "any",
  })
  async createDocument(
    @graphql.Args() args: CreateDocumentArgs
  ): Promise<Document> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        Client: args.data.Client
          ? {
              connect: args.data.Client,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Document)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "update",
    possession: "any",
  })
  async updateDocument(
    @graphql.Args() args: UpdateDocumentArgs
  ): Promise<Document | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          Client: args.data.Client
            ? {
                connect: args.data.Client,
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

  @graphql.Mutation(() => Document)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "delete",
    possession: "any",
  })
  async deleteDocument(
    @graphql.Args() args: DeleteDocumentArgs
  ): Promise<Document | null> {
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
  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  @nestAccessControl.UseRoles({
    resource: "Client",
    action: "read",
    possession: "any",
  })
  async resolveFieldClient(
    @graphql.Parent() parent: Document
  ): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
