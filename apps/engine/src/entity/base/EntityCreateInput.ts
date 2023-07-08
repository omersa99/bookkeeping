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
import { EnumEntityAccountingType } from "./EnumEntityAccountingType";
import {
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { ChartOfAccountWhereUniqueInput } from "../../chartOfAccount/base/ChartOfAccountWhereUniqueInput";
import { Type } from "class-transformer";
import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";
import { JournalCreateNestedManyWithoutEntitiesInput } from "./JournalCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class EntityCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumEntityAccountingType,
  })
  @IsEnum(EnumEntityAccountingType)
  @IsOptional()
  @Field(() => EnumEntityAccountingType, {
    nullable: true,
  })
  accountingType?: "Cash" | "Cumulative" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

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
  coa?: ChartOfAccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CustomerCreateNestedManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateNestedManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => CustomerCreateNestedManyWithoutEntitiesInput, {
    nullable: true,
  })
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deductionId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deductionRate?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  exemption?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemWhereUniqueInput, {
    nullable: true,
  })
  items?: ItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => JournalCreateNestedManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => JournalCreateNestedManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => JournalCreateNestedManyWithoutEntitiesInput, {
    nullable: true,
  })
  journals?: JournalCreateNestedManyWithoutEntitiesInput;

  @ApiProperty({
    required: false,
    type: () => LedgerCreateNestedManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => LedgerCreateNestedManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => LedgerCreateNestedManyWithoutEntitiesInput, {
    nullable: true,
  })
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  taxId?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { EntityCreateInput as EntityCreateInput };
