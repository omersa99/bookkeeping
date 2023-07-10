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
import { IsInt, IsOptional, IsString, ValidateNested } from "class-validator";
import { ChartOfAccountUpdateManyWithoutAccountsInput } from "./ChartOfAccountUpdateManyWithoutAccountsInput";
import { Type } from "class-transformer";
import { InvoiceModelUpdateManyWithoutAccountsInput } from "./InvoiceModelUpdateManyWithoutAccountsInput";
import { TransactionUpdateManyWithoutAccountsInput } from "./TransactionUpdateManyWithoutAccountsInput";

@InputType()
class AccountUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  balanceType?: string | null;

  @ApiProperty({
    required: false,
    type: () => ChartOfAccountUpdateManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => ChartOfAccountUpdateManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => ChartOfAccountUpdateManyWithoutAccountsInput, {
    nullable: true,
  })
  chartOfAccount?: ChartOfAccountUpdateManyWithoutAccountsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceModelUpdateManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => InvoiceModelUpdateManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => InvoiceModelUpdateManyWithoutAccountsInput, {
    nullable: true,
  })
  invoiceModels?: InvoiceModelUpdateManyWithoutAccountsInput;

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
  role?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutAccountsInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutAccountsInput;
}

export { AccountUpdateInput as AccountUpdateInput };
