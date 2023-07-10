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
import { AccountWhereUniqueInput } from "../../account/base/AccountWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JournalWhereUniqueInput } from "../../journal/base/JournalWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";
import { EnumTransactionTransactionType } from "./EnumTransactionTransactionType";

@InputType()
class TransactionWhereInput {
  @ApiProperty({
    required: false,
    type: () => AccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AccountWhereUniqueInput)
  @IsOptional()
  @Field(() => AccountWhereUniqueInput, {
    nullable: true,
  })
  account?: AccountWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

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
    type: () => JournalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JournalWhereUniqueInput)
  @IsOptional()
  @Field(() => JournalWhereUniqueInput, {
    nullable: true,
  })
  journal?: JournalWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PaymentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PaymentWhereUniqueInput)
  @IsOptional()
  @Field(() => PaymentWhereUniqueInput, {
    nullable: true,
  })
  payments?: PaymentWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTransactionTransactionType,
  })
  @IsEnum(EnumTransactionTransactionType)
  @IsOptional()
  @Field(() => EnumTransactionTransactionType, {
    nullable: true,
  })
  transactionType?: "Debit" | "Credit";
}

export { TransactionWhereInput as TransactionWhereInput };
