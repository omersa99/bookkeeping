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
import { ChartOfAccountWhereUniqueInput } from "../../chartOfAccount/base/ChartOfAccountWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CustomerCreateNestedManyWithoutEntitiesInput } from "./CustomerCreateNestedManyWithoutEntitiesInput";
import { ItemWhereUniqueInput } from "../../item/base/ItemWhereUniqueInput";
import { ItemTransactionCreateNestedManyWithoutEntitiesInput } from "./ItemTransactionCreateNestedManyWithoutEntitiesInput";
import { JournalCreateNestedManyWithoutEntitiesInput } from "./JournalCreateNestedManyWithoutEntitiesInput";
import { LedgerCreateNestedManyWithoutEntitiesInput } from "./LedgerCreateNestedManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class EntityCreateInput {
  @ApiProperty({
    required: false,
    type: () => ChartOfAccountWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChartOfAccountWhereUniqueInput)
  @IsOptional()
  @Field(() => ChartOfAccountWhereUniqueInput, {
    nullable: true,
  })
  coa?: ChartOfAccountWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CustomerCreateNestedManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => CustomerCreateNestedManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => CustomerCreateNestedManyWithoutEntitiesInput, {
    nullable: true,
  })
  customers?: CustomerCreateNestedManyWithoutEntitiesInput;

  @ApiProperty({
    required: false,
    type: () => ItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemWhereUniqueInput)
  @IsOptional()
  @Field(() => ItemWhereUniqueInput, {
    nullable: true,
  })
  items?: ItemWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ItemTransactionCreateNestedManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => ItemTransactionCreateNestedManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => ItemTransactionCreateNestedManyWithoutEntitiesInput, {
    nullable: true,
  })
  itemTransactions?: ItemTransactionCreateNestedManyWithoutEntitiesInput;

  @ApiProperty({
    required: false,
    type: () => JournalCreateNestedManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => JournalCreateNestedManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => JournalCreateNestedManyWithoutEntitiesInput, {
    nullable: true,
  })
  journals?: JournalCreateNestedManyWithoutEntitiesInput;

  @ApiProperty({
    required: false,
    type: () => LedgerCreateNestedManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => LedgerCreateNestedManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => LedgerCreateNestedManyWithoutEntitiesInput, {
    nullable: true,
  })
  ledgers?: LedgerCreateNestedManyWithoutEntitiesInput;

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { EntityCreateInput as EntityCreateInput };
