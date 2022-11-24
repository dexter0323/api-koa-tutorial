import Router from 'koa-router'
import { UserController } from './controller'

export const UserRouter = new Router({ prefix: '/api/v1/users' })
const controller = new UserController()

UserRouter.get('ListUsers', '/', (ctx) => controller.listUsers(ctx))
UserRouter.post('CreateUser', '/', (ctx) => {
  ctx.body = 'Pending implemantation'
})
UserRouter.put('UpdateUsers', '/', (ctx) => {
  ctx.body = 'Pending implemantation'
})

UserRouter.patch('PartialUpdateUsers', '/', (ctx) => {
  ctx.body = 'Pending implemantation'
})

UserRouter.delete('DeleteAllUser', '/', (ctx) => {
  ctx.body = 'Pending implemantation'
})

UserRouter.get('GetAsJsonFile', '/download', (ctx) =>
  controller.downloadFile(ctx)
)

UserRouter.get('GetUser', '/:id', (ctx) => controller.getUser(ctx))
UserRouter.put('UpdateUser', '/:id', (ctx) => {
  ctx.body = 'Pending implemantation'
})
UserRouter.patch('PartialUpdateUser', '/:id', (ctx) => {
  ctx.body = 'Pending implemantation'
})
UserRouter.delete('DeleteUser', '/:id', (ctx) => {
  ctx.body = 'Pending implemantation'
})
UserRouter.get('GetAsJsonFile', '/:id/download', (ctx) =>
  controller.downloadFile(ctx)
)
