import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { ThrottlerModule } from "@nestjs/throttler";

import { envConfig } from "./common/config/env.config";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SchedulerModule } from "./scheduler/scheduler.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot([
      { ttl: 60_000, limit: 120 }, // per minute per IP (tune for your app)
    ]),
    AuthModule,
    HealthModule,
    SchedulerModule,
  ],
})
export class AppModule {}
