import { Injectable } from "@nestjs/common";

@Injectable()
export class TemplatesService {
  render(name: string): string {
    return name;
  }
}
