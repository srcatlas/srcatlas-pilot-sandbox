import { Module } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { TemplatesService } from "./templates.service";

@Module({
  providers: [NotificationsService, TemplatesService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
