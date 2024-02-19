import { MshpNestFactory } from "@mothership/nest"
import { PurchaseModule, PurchaseService } from "@core/modules"
import { INestApplicationContext } from "@nestjs/common"

class ServicesApplicationContextStatic {
  private _app: INestApplicationContext | null = null

  public async init() {
    if (!this._app) {
      this._app = await MshpNestFactory.createApplicationContext(PurchaseModule)
    }
    return this._app
  }

  public get initialized(): boolean {
    return Boolean(this._app)
  }

  public get app(): INestApplicationContext {
    if (!this._app) {
      throw new Error("Application context not initialized")
    }
    return this._app
  }

  public get purchase(): PurchaseService {
    return this.app.get<PurchaseService>(PurchaseService)
  }
}

export const services = new ServicesApplicationContextStatic()
if (!services.initialized) {
  services.init().then(() => {
    console.log("[services] initialized")
  })
}
