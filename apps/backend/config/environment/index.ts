import { envUtils, enumUtils, numUtils, arrayUtils } from "@core/utils"
import { Cluster } from "./cluster.enum"

export interface IConfigEnvironment {
  cluster: Cluster
  port: number
}

export class ConfigEnvironment implements IConfigEnvironment {
  public readonly cluster: Cluster = enumUtils.validateOrThrow(
    Cluster,
    envUtils.getOrThrow("CLUSTER")
  )

  public readonly port: number = numUtils.toNumber(envUtils.getOrThrow("PORT"))

  /**
   * Checks if the current environment is production.
   *
   * @returns {boolean} True if the current environment is production, false otherwise.
   */
  public get isProduction(): boolean {
    return this.cluster === Cluster.Production
  }

  /**
   * Checks if the current environment is staging.
   *
   * @returns {boolean} True if the current environment is staging, false otherwise.
   */
  public get isStaging(): boolean {
    return this.cluster === Cluster.Staging
  }

  /**
   * Checks if the current environment is local.
   *
   * @returns {boolean} True if the current environment is local, false otherwise.
   */
  public get isLocal(): boolean {
    return this.cluster === Cluster.Local
  }

  /**
   * Checks if the current environment is development.
   *
   * @returns {boolean} True if the current environment is development, false otherwise.
   */
  public get isDevelopment(): boolean {
    return this.cluster === Cluster.Development
  }

  /**
   * Checks if the current environment is test.
   *
   * @returns {boolean} True if the current environment is test, false otherwise.
   */
  public get isTest(): boolean {
    return this.cluster === Cluster.Test
  }

  /**
   * Checks if the current environment is one of the specified clusters.
   *
   * @param {Cluster | Array<Cluster>} cluster - The cluster or clusters to check against.
   * @returns {boolean} True if the current environment is one of the specified clusters, false otherwise.
   */
  public is(cluster: Cluster | Array<Cluster>): boolean {
    const clusters = arrayUtils.ensure(cluster)
    return clusters.includes(this.cluster)
  }
}

export { Cluster }
