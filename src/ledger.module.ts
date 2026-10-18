import { Module } from "@nestjs/common";
import { ArchiveDb } from "./archive-db";
import { CustomersService } from "./customers.service";
import { DynamicService } from "./dynamic.service";
import { InvoicesController } from "./invoices.controller";
import { InvoicesService } from "./invoices.service";
import { LedgerDb } from "./ledger-db";
import { NotificationsModule } from "./notifications.module";
import { PaymentsService } from "./payments.service";
import { ReportsService } from "./reports.service";

@Module({
  controllers: [InvoicesController],
  providers: [
    LedgerDb,
    ArchiveDb,
    InvoicesService,
    PaymentsService,
    CustomersService,
    ReportsService,
    DynamicService,
  ],
})
export class LedgerModule {}
