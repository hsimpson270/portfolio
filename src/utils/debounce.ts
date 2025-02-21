export function debounce(func: Function) {
  let timeoutID: NodeJS.Timeout | null = null;

  return function (this: any, ...args: any[]): void {
    const context = this;
    clearTimeout(timeoutID ?? undefined);

    timeoutID = setTimeout(() => {
      timeoutID = null;
      func.apply(context, args);
    }, 100);
  };
}
