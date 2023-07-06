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
import { LedgerUpdateManyWithoutEntitiesInput } from "./LedgerUpdateManyWithoutEntitiesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class EntityUpdateInput {
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
    type: () => LedgerUpdateManyWithoutEntitiesInput,
  })
  @ValidateNested()
  @Type(() => LedgerUpdateManyWithoutEntitiesInput)
  @IsOptional()
  @Field(() => LedgerUpdateManyWithoutEntitiesInput, {
    nullable: true,
  })
  ledgers?: LedgerUpdateManyWithoutEntitiesInput;

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

export { EntityUpdateInput as EntityUpdateInput };
