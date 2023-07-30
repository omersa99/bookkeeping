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
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
  IsInt,
} from "class-validator";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Type } from "class-transformer";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { EnumInvoiceModelInvoiceStatus } from "./EnumInvoiceModelInvoiceStatus";
import { ItemUpdateManyWithoutInvoiceModelsInput } from "./ItemUpdateManyWithoutInvoiceModelsInput";
import { LedgerWhereUniqueInput } from "../../ledger/base/LedgerWhereUniqueInput";

@InputType()
class InvoiceModelUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amountDue?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  amountPaid?: string | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => EntityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EntityWhereUniqueInput)
  @IsOptional()
  @Field(() => EntityWhereUniqueInput, {
    nullable: true,
  })
  entity?: EntityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  info?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  invoiceNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumInvoiceModelInvoiceStatus,
  })
  @IsEnum(EnumInvoiceModelInvoiceStatus)
  @IsOptional()
  @Field(() => EnumInvoiceModelInvoiceStatus, {
    nullable: true,
  })
  invoiceStatus?: "Draft" | "Paid" | "Canceled" | null;

  @ApiProperty({
    required: false,
    type: () => ItemUpdateManyWithoutInvoiceModelsInput,
  })
  @ValidateNested()
  @Type(() => ItemUpdateManyWithoutInvoiceModelsInput)
  @IsOptional()
  @Field(() => ItemUpdateManyWithoutInvoiceModelsInput, {
    nullable: true,
  })
  item?: ItemUpdateManyWithoutInvoiceModelsInput;

  @ApiProperty({
    required: false,
    type: () => LedgerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LedgerWhereUniqueInput)
  @IsOptional()
  @Field(() => LedgerWhereUniqueInput, {
    nullable: true,
  })
  ledger?: LedgerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pricePerUnit?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;
}

export { InvoiceModelUpdateInput as InvoiceModelUpdateInput };
