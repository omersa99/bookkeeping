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
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Entity } from "../../entity/base/Entity";
import { InvoiceModel } from "../../invoiceModel/base/InvoiceModel";
import { Journal } from "../../journal/base/Journal";

@ObjectType()
class Ledger {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => Entity,
  })
  @ValidateNested()
  @Type(() => Entity)
  @IsOptional()
  entity?: Entity | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => InvoiceModel,
  })
  @ValidateNested()
  @Type(() => InvoiceModel)
  @IsOptional()
  invoiceModels?: InvoiceModel | null;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Ledger as Ledger };
