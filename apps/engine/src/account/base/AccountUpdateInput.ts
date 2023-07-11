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
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumAccountRole } from "./EnumAccountRole";
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
