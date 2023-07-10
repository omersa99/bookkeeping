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
import { ValidateNested, IsOptional, IsNumber, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { JournalWhereUniqueInput } from "../../journal/base/JournalWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../../payment/base/PaymentWhereUniqueInput";
import { EnumTransactionTransactionType } from "./EnumTransactionTransactionType";

@InputType()
class TransactionUpdateInput {
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
  account?: AccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

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
  journal?: JournalWhereUniqueInput | null;

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
  payments?: PaymentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumTransactionTransactionType,
  })
  @IsEnum(EnumTransactionTransactionType)
  @IsOptional()
  @Field(() => EnumTransactionTransactionType, {
    nullable: true,
  })
  transactionType?: "Debit" | "Credit" | null;
}

export { TransactionUpdateInput as TransactionUpdateInput };
