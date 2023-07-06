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
import { InvoiceModelWhereInput } from "./InvoiceModelWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InvoiceModelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InvoiceModelWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceModelWhereInput)
  @IsOptional()
  @Field(() => InvoiceModelWhereInput, {
    nullable: true,
  })
  every?: InvoiceModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceModelWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceModelWhereInput)
  @IsOptional()
  @Field(() => InvoiceModelWhereInput, {
    nullable: true,
  })
  some?: InvoiceModelWhereInput;

  @ApiProperty({
    required: false,
    type: () => InvoiceModelWhereInput,
  })
  @ValidateNested()
  @Type(() => InvoiceModelWhereInput)
  @IsOptional()
  @Field(() => InvoiceModelWhereInput, {
    nullable: true,
  })
  none?: InvoiceModelWhereInput;
}
export { InvoiceModelListRelationFilter as InvoiceModelListRelationFilter };
