import { Injectable } from "@nestjs/common"
import { DateTime } from "@shared/libs"
import { Quote } from "./domain/quote.entity"
import { UUIDLib } from "@mothership/nest"

@Injectable()
export class QuoteService {
  public async create(): Promise<Quote> {
    return {
      id: UUIDLib.generate(),
      createdAt: new DateTime(),
      updatedAt: new DateTime(),
    }
  }

  public async purchase(_id: string): Promise<string> {
    return await Promise.resolve("MS" + (Math.random() * 999999).toFixed(0))
  }
}
