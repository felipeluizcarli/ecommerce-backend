import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from "../entities/city.entity";
import { State } from "../../states/entities/state.entity";
import { CityService } from "./city.service";
import { StateService } from "../../states/services/state.service";
import { CityController } from "../controllers/city.controller";
import { StateController } from "../../states/controllers/state.controller";

@Module({
  imports: [TypeOrmModule.forFeature([City, State])],
  providers: [CityService, StateService],
  controllers: [CityController, StateController],
})
export class CityModule {}
