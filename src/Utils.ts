import * as yaml from 'js-yaml'
import { readFileSync } from 'node:fs'
import path from 'node:path'

export interface Configs {
  enviroment: { HOST: string; PORT: number; NODE_ENV: string; VERBOSE: boolean }
}

export class Utils {
  private static configs: Configs
  public static getConfigs(): Configs | void {
    try {
      if (!this.configs) {
        const configPath = path.join(__dirname, '..', 'config.yaml')
        this.configs = <Configs>yaml.load(readFileSync(configPath, 'utf8'))
      }
      return this.configs
    } catch (error) {
      console.error(error)
    }
  }
  public static logInfo(message: string): void {
    if (this.configs.enviroment.VERBOSE) console.info(message)
  }
  public static logError(error: Error): void {
    console.error(error)
  }
}
