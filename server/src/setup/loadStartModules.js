import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import ExpressMongoSanitize from 'express-mongo-sanitize'
import dotenv from 'dotenv'

export default function loadStartModules(app) {
  console.info('SETUP - Loading modules...')
  dotenv.config()

  // disable display of tech stack
  app.disable('x-powered-by')
  // parse json request body
  app.use(express.json({ limit: '69mb' }))
  // parse urlencoded request body
  app.use(express.urlencoded({ extended: true }))
  app.use(ExpressMongoSanitize())

  // enable cors
  app.use(cors())
  app.options('*', cors())

  // Middleware
  app.use(morgan('tiny'))

  console.info('SETUP COMPLETED...')
}
