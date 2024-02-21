import { Injectable } from "@nestjs/common"

@Injectable()
export class QuoteService {
  public async create(id: string): Promise<string> {
    return await Promise.resolve("MS" + (Math.random() * 999999).toFixed(0))
  }
}
