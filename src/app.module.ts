import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AirportsModule } from './modules/airports/airports.module';
import { AirportsController } from './modules/airports/controllers/airports.controller';
import { AirportsService } from './modules/airports/services/airports.service';
import { PlanesController } from './modules/planes/controllers/planes.controller';
import { PlanesModule } from './modules/planes/planes.module';
import { CargoService } from './modules/planes/services/cargo.service';
import { EnemyService } from './modules/planes/services/enemy.service';
import { BattleService } from './shared-services/battle.service';
import { DispatcherService } from './shared-services/dispatcher.service';
import { CargoFactoryService } from './shared-services/factories/cargo-factory.service';
import { EnemyFactoryService } from './shared-services/factories/enemy-factory.service';
import { FactoryService } from './shared-services/factory.service';
import { IntervalService } from './shared-services/interval.service';
import { ManagerService } from './shared-services/manager.service';
import { MoverService } from './shared-services/mover.service';
import { SpawnService } from './shared-services/spawn.service';
import { AppGateway } from './app.gateway';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AirportSchema } from './modules/airports/schema/airport.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AirportsModule,
    PlanesModule,
    MongooseModule.forFeature([{ name: 'Airport', schema: AirportSchema }]),
  ],
  controllers: [AirportsController, PlanesController],
  providers: [
    AppService,
    IntervalService,
    MoverService,
    FactoryService,
    AirportsService,
    EnemyService,
    CargoService,
    SpawnService,
    CargoFactoryService,
    EnemyFactoryService,
    ManagerService,
    DispatcherService,
    BattleService,
    AppGateway,
  ],
})
export class AppModule {}
