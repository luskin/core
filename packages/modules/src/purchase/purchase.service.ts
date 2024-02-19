import { Injectable } from "@nestjs/common"

@Injectable()
export class PurchaseService {
  public async create(): Promise<string> {
    return await Promise.resolve("MS" + (Math.random() * 999999).toFixed(0))
  }
}
