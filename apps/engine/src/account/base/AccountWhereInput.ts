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
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChartOfAccountListRelationFilter } from "../../chartOfAccount/base/ChartOfAccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceModelListRelationFilter } from "../../invoiceModel/base/InvoiceModelListRelationFilter";
import { EnumAccountRole } from "./EnumAccountRole";
import { TransactionListRelationFilter } from "../../transaction/base/TransactionListRelationFilter";

@InputType()
class AccountWhereInput {
  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  balance?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  balanceType?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ChartOfAccountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ChartOfAccountListRelationFilter)
  @IsOptional()
  @Field(() => ChartOfAccountListRelationFilter, {
    nullable: true,
  })
  chartOfAccount?: ChartOfAccountListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  code?: StringNullableFilter;

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
    type: () => InvoiceModelListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InvoiceModelListRelationFilter)
  @IsOptional()
  @Field(() => InvoiceModelListRelationFilter, {
    nullable: true,
  })
  invoiceModels?: InvoiceModelListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumAccountRole,
  })
  @IsEnum(EnumAccountRole)
  @IsOptional()
  @Field(() => EnumAccountRole, {
    nullable: true,
  })
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses";

  @ApiProperty({
    required: false,
    type: () => TransactionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TransactionListRelationFilter)
  @IsOptional()
  @Field(() => TransactionListRelationFilter, {
    nullable: true,
  })
  transactions?: TransactionListRelationFilter;
}

export { AccountWhereInput as AccountWhereInput };
