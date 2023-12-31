/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LedgerWhereUniqueInput } from "../../ledger/base/LedgerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LedgerUpdateManyWithoutEntitiesInput {
  @Field(() => [LedgerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LedgerWhereUniqueInput],
  })
  connect?: Array<LedgerWhereUniqueInput>;

  @Field(() => [LedgerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LedgerWhereUniqueInput],
  })
  disconnect?: Array<LedgerWhereUniqueInput>;

  @Field(() => [LedgerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LedgerWhereUniqueInput],
  })
  set?: Array<LedgerWhereUniqueInput>;
}

export { LedgerUpdateManyWithoutEntitiesInput as LedgerUpdateManyWithoutEntitiesInput };
