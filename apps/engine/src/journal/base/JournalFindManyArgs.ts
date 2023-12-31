/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JournalWhereInput } from "./JournalWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JournalOrderByInput } from "./JournalOrderByInput";

@ArgsType()
class JournalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JournalWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JournalWhereInput, { nullable: true })
  @Type(() => JournalWhereInput)
  where?: JournalWhereInput;

  @ApiProperty({
    required: false,
    type: [JournalOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JournalOrderByInput], { nullable: true })
  @Type(() => JournalOrderByInput)
  orderBy?: Array<JournalOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JournalFindManyArgs as JournalFindManyArgs };
