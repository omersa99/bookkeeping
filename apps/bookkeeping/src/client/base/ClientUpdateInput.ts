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
  IsBoolean,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { DocumentUpdateManyWithoutClientsInput } from "./DocumentUpdateManyWithoutClientsInput";
import { Type } from "class-transformer";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ClientUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  active?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customerName?: string | null;

  @ApiProperty({
    required: false,
    type: () => DocumentUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => DocumentUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => DocumentUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  documents?: DocumentUpdateManyWithoutClientsInput;

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
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  info?: InputJsonValue;

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
  taxId?: string | null;
}

export { ClientUpdateInput as ClientUpdateInput };
