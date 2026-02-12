import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  // Example job: runs every hour
  @Cron(CronExpression.EVERY_HOUR)
  handleHourly() {
    this.logger.log("Hourly cron executed (blueprint placeholder).");
  }
}
