import { envUtils, enumUtils, numUtils, arrayUtils } from "@core/utils"

export interface IConfigEnvironment {
  port: number
}

export class ConfigEnvironment implements IConfigEnvironment {
  private readonly nodeEnv = envUtils.getOrThrow("NODE_ENV")

  public readonly port: number = numUtils.toNumber(envUtils.getOrThrow("PORT"))

  /**
   * Checks if the current environment is development.
   *
   * @returns {boolean} True if the current environment is development, false otherwise.
   */
  public get isDevelopment(): boolean {
    return this.nodeEnv === "development"
  }

  /**
   * Checks if the current environment is test.
   *
   * @returns {boolean} True if the current environment is test, false otherwise.
   */
  public get isTest(): boolean {
    return this.nodeEnv === "test"
  }
}
