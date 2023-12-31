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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { Client } from "../../client/base/Client";
import { EnumDocumentDocType } from "./EnumDocumentDocType";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../../item/base/ItemListRelationFilter";
import { EnumDocumentStatus } from "./EnumDocumentStatus";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";

@InputType()
class DocumentWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  cashAccount?: StringNullableFilter;

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
  Client?: ClientWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumDocumentDocType,
  })
  @IsEnum(EnumDocumentDocType)
  @IsOptional()
  @Field(() => EnumDocumentDocType, {
    nullable: true,
  })
  docType?: "Invoice" | "Receipt" | "Bill";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dueDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ItemListRelationFilter)
  @IsOptional()
  @Field(() => ItemListRelationFilter, {
    nullable: true,
  })
  items?: ItemListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  prepaidAccount?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumDocumentStatus,
  })
  @IsEnum(EnumDocumentStatus)
  @IsOptional()
  @Field(() => EnumDocumentStatus, {
    nullable: true,
  })
  status?: "Draft" | "Approved" | "Paid" | "Canceled";

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
  supplier?: SupplierWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  unearnedAccount?: StringNullableFilter;
}

export { DocumentWhereInput as DocumentWhereInput };
