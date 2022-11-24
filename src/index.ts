import { Configs, Utils } from './Utils'
import { AppServer } from './server'
import { UserRouter } from './server/v1/users'

const configs = <Configs>Utils.getConfigs()

const server = new AppServer()
server.listen(configs.enviroment.PORT, configs.enviroment.HOST)
server.registerRouter(UserRouter)
