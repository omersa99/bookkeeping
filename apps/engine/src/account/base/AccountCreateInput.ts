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
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { ChartOfAccountCreateNestedManyWithoutAccountsInput } from "./ChartOfAccountCreateNestedManyWithoutAccountsInput";
import { Type } from "class-transformer";
import { EnumAccountRole } from "./EnumAccountRole";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

@InputType()
class AccountCreateInput {
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
    type: () => ChartOfAccountCreateNestedManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => ChartOfAccountCreateNestedManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => ChartOfAccountCreateNestedManyWithoutAccountsInput, {
    nullable: true,
  })
  chartOfAccount?: ChartOfAccountCreateNestedManyWithoutAccountsInput;

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
    enum: EnumAccountRole,
  })
  @IsEnum(EnumAccountRole)
  @IsOptional()
  @Field(() => EnumAccountRole, {
    nullable: true,
  })
  role?: "Asset" | "Liability" | "Income" | "Cogs" | "Expenses" | null;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutAccountsInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutAccountsInput;
}

export { AccountCreateInput as AccountCreateInput };
