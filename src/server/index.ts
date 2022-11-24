import Koa from 'koa'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import parser from 'koa-bodyparser'
import Router from 'koa-router'
import { Server } from 'http'
import { Utils } from '../Utils'

export class AppServer<T> {
  private app: Koa
  private server!: Server

  constructor() {
    this.app = new Koa()
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(parser())
  }

  public listen(port: number, host: string): void {
    this.server = this.app.listen(port, host, () =>
      Utils.logInfo(`Server running on http://${host}:${port}/`)
    )
  }

  public getServer(): Server {
    return this.server
  }

  registerRouter(router: Router) {
    this.app.use(router.routes())
  }

  registerMiddleware(middleware: Function) {
    this.app.use(middleware())
  }
}
