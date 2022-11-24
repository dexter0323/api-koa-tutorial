import { Context } from 'koa'
import { readFileSync, createReadStream } from 'node:fs'
import path from 'node:path'
import { Utils } from '../../../Utils'

interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  status: boolean
}

export class UserController {
  private _users: User[]
  private fileName = 'users.json'
  private filePath = path.join(__dirname, this.fileName)

  constructor() {
    try {
      this._users = JSON.parse(readFileSync(this.filePath, 'utf8'))
    } catch (error) {
      this._users = []
      Utils.logError(<Error>error)
    }
  }

  public listUsers(ctx: Context) {
    ctx.body = this._users
  }

  public getUser(ctx: Context) {
    try {
      ctx.body = this._users.find((user) => user.id === Number(ctx.params.id))
    } catch (error) {
      Utils.logError(<Error>error)
      ctx.body = 'User not found.'
    }
  }

  //TODO: Implement this method
  public updateUser(ctx: Context) {
    try {
    } catch (error) {
      Utils.logError(<Error>error)
      ctx.body = 'User not found.'
    }
  }

  //TODO: Implement this method
  public deleteUser(ctx: Context) {
    try {
    } catch (error) {
      Utils.logError(<Error>error)
      ctx.body = 'User not found.'
    }
  }

  public downloadFile(ctx: Context) {
    try {
      ctx.attachment(this.fileName)
      ctx.body = createReadStream(this.filePath, 'utf8')
    } catch (error) {
      Utils.logError(<Error>error)
      ctx.body = 'User not found.'
    }
  }
}
