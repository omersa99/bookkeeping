/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumEntityAccountingType } from "./EnumEntityAccountingType";
import {
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
  IsDate,
  IsBoolean,
} from "class-validator";
import { ChartOfAccount } from "../../chartOfAccount/base/ChartOfAccount";
import { Type } from "class-transformer";
import { Customer } from "../../customer/base/Customer";
import { Item } from "../../item/base/Item";
import { Journal } from "../../journal/base/Journal";
import { Ledger } from "../../ledger/base/Ledger";
import { User } from "../../user/base/User";

@ObjectType()
class Entity {
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
  address!: string | null;

  @ApiProperty({
    required: false,
    type: () => ChartOfAccount,
  })
  @ValidateNested()
  @Type(() => ChartOfAccount)
  @IsOptional()
  coa?: ChartOfAccount | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Customer],
  })
  @ValidateNested()
  @Type(() => Customer)
  @IsOptional()
  customers?: Array<Customer>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deductionId!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deductionRate!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  exemption!: boolean | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Item,
  })
  @ValidateNested()
  @Type(() => Item)
  @IsOptional()
  items?: Item | null;

  @ApiProperty({
    required: false,
    type: () => [Journal],
  })
  @ValidateNested()
  @Type(() => Journal)
  @IsOptional()
  journals?: Array<Journal>;

  @ApiProperty({
    required: false,
    type: () => [Ledger],
  })
  @ValidateNested()
  @Type(() => Ledger)
  @IsOptional()
  ledgers?: Array<Ledger>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  taxId!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Entity as Entity };
