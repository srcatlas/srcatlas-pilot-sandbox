import { Injectable } from "@nestjs/common";

@Injectable()
export class AuditService {
  record(event: string): string {
    return event;
  }
}
