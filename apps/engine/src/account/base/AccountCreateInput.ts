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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { EntityCreateNestedManyWithoutAccountsInput } from "./EntityCreateNestedManyWithoutAccountsInput";
import { Type } from "class-transformer";
import { TransactionCreateNestedManyWithoutAccountsInput } from "./TransactionCreateNestedManyWithoutAccountsInput";

@InputType()
class AccountCreateInput {
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
    type: () => EntityCreateNestedManyWithoutAccountsInput,
  })
  @ValidateNested()
  @Type(() => EntityCreateNestedManyWithoutAccountsInput)
  @IsOptional()
  @Field(() => EntityCreateNestedManyWithoutAccountsInput, {
    nullable: true,
  })
  entity?: EntityCreateNestedManyWithoutAccountsInput;

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
