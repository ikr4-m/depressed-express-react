import chalk from 'chalk'
import moment from 'moment'

export default (req: any, res: any, next: any) => {
  const now = moment()
  console.log(
    `${chalk.redBright(`[${now.format('YYYY-MM-DD HH:mm:ss')}]`)}: Got request from ${req.url}!`
  )
  next()
}
