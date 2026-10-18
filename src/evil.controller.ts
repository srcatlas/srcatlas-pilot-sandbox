import { Controller, Get } from "@nestjs/common";

@Controller("evil")
export class EvilController {
  @Get("a`b```c")
  backtick() {
    return 1;
  }

  @Get("line\nbreak")
  lineBreak() {
    return 2;
  }

  @Get("@org/team")
  mention() {
    return 3;
  }
}
