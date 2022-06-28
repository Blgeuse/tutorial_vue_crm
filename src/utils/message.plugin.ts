export function message(html:string) {
  M.toast({html})
}

export function error(html:string) {
  M.toast({html: `[Ошибка]: ${html}`})
}
