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
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { ChartOfAccountWhereUniqueInput } from "../../chartOfAccount/base/ChartOfAccountWhereUniqueInput";
import { CustomerListRelationFilter } from "../../customer/base/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ItemListRelationFilter } from "../../item/base/ItemListRelationFilter";
import { LedgerListRelationFilter } from "../../ledger/base/LedgerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";

@InputType()
class EntityWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  accrualMethod?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ChartOfAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChartOfAccountWhereUniqueInput)
  @IsOptional()
  @Field(() => ChartOfAccountWhereUniqueInput, {
    nullable: true,
  })
  chartOfAccounts?: ChartOfAccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CustomerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CustomerListRelationFilter)
  @IsOptional()
  @Field(() => CustomerListRelationFilter, {
    nullable: true,
  })
  customers?: CustomerListRelationFilter;

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
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  info?: JsonFilter;

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
    type: () => LedgerListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LedgerListRelationFilter)
  @IsOptional()
  @Field(() => LedgerListRelationFilter, {
    nullable: true,
  })
  ledgers?: LedgerListRelationFilter;

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
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  users?: UserListRelationFilter;
}

export { EntityWhereInput as EntityWhereInput };
