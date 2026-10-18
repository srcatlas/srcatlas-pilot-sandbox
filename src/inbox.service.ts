import { Injectable } from "@nestjs/common";

@Injectable()
export class InboxService {
  read(): string {
    return "inbox";
  }
}
