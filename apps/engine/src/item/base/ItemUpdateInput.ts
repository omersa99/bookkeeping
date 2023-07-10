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
  IsNumber,
  IsInt,
} from "class-validator";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { Type } from "class-transformer";
import { InvoiceModelWhereUniqueInput } from "../../invoiceModel/base/InvoiceModelWhereUniqueInput";
import { ItemTransactionUpdateManyWithoutItemsInput } from "./ItemTransactionUpdateManyWithoutItemsInput";

@InputType()
class ItemUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
    type: () => InvoiceModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvoiceModelWhereUniqueInput)
  @IsOptional()
  @Field(() => InvoiceModelWhereUniqueInput, {
    nullable: true,
  })
  invoiceModels?: InvoiceModelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ItemTransactionUpdateManyWithoutItemsInput,
  })
  @ValidateNested()
  @Type(() => ItemTransactionUpdateManyWithoutItemsInput)
  @IsOptional()
  @Field(() => ItemTransactionUpdateManyWithoutItemsInput, {
    nullable: true,
  })
  itemTransactions?: ItemTransactionUpdateManyWithoutItemsInput;

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
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

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

export { ItemUpdateInput as ItemUpdateInput };