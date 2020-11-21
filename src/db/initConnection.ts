import config from '@/config'
import * as pg from 'pg'
import {Sequelize} from 'sequelize'

export default new Sequelize(config.DATABASE_URL,{
  dialectModule:pg
})