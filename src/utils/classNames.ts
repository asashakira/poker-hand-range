export const classNames = (...classes: string[]) =>
  classes.reduce<string>((classes, now) => {
    return classes + now + ' '
  }, '')
