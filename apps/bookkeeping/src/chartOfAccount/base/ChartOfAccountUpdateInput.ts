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
import { AccountUpdateManyWithoutChartOfAccountsInput } from "./AccountUpdateManyWithoutChartOfAccountsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";

@InputType()
class ChartOfAccountUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AccountUpdateManyWithoutChartOfAccountsInput,
  })
  @ValidateNested()
  @Type(() => AccountUpdateManyWithoutChartOfAccountsInput)
  @IsOptional()
  @Field(() => AccountUpdateManyWithoutChartOfAccountsInput, {
    nullable: true,
  })
  accountsSet?: AccountUpdateManyWithoutChartOfAccountsInput;

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
}

export { ChartOfAccountUpdateInput as ChartOfAccountUpdateInput };
