/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsEnum,
  IsDate,
} from "class-validator";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { Type } from "class-transformer";
import { Client } from "../../client/base/Client";
import { EnumDocumentDocType } from "./EnumDocumentDocType";
import { ItemUpdateManyWithoutDocumentsInput } from "./ItemUpdateManyWithoutDocumentsInput";
import { EnumDocumentStatus } from "./EnumDocumentStatus";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class DocumentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cashAccount?: string | null;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  Client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumDocumentDocType,
  })
  @IsEnum(EnumDocumentDocType)
  @IsOptional()
  @Field(() => EnumDocumentDocType, {
    nullable: true,
  })
  docType?: "Invoice" | "Receipt" | "Bill" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ItemUpdateManyWithoutDocumentsInput,
  })
  @ValidateNested()
  @Type(() => ItemUpdateManyWithoutDocumentsInput)
  @IsOptional()
  @Field(() => ItemUpdateManyWithoutDocumentsInput, {
    nullable: true,
  })
  items?: ItemUpdateManyWithoutDocumentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  prepaidAccount?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDocumentStatus,
  })
  @IsEnum(EnumDocumentStatus)
  @IsOptional()
  @Field(() => EnumDocumentStatus, {
    nullable: true,
  })
  status?: "Draft" | "Approved" | "Paid" | "Canceled" | null;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unearnedAccount?: string | null;
}

export { DocumentUpdateInput as DocumentUpdateInput };
