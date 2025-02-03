export default class DateUtil {
  static formatDate(dateString: string) {
    const date = new Date(dateString)
    date.setDate(date.getDate() + 1)
    const dia = date.getDate().toString().padStart(2, '0')
    const mes = (date.getMonth() + 1).toString().padStart(2, '0')
    const ano = date.getFullYear()

    return `${dia}/${mes}/${ano}`
  }
}
