import { Module } from "@nestjs/common";
import { LedgerModule } from "./ledger.module";
import { NotificationsService } from "./notifications.service";

@Module({
  imports: [LedgerModule],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
