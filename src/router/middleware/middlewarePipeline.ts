/* eslint-disable @typescript-eslint/no-explicit-any */
export default function middlewarePipeline(
  context: { next: any },
  middleware: { [x: string]: any },
  index: number,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
): Function {
  const nextMiddleware = middleware[index]
  if (!nextMiddleware) {
    return context.next
  }

  return async () => {
    await nextMiddleware({
      ...context,
      next: await middlewarePipeline(context, middleware, index + 1),
    })
  }
}
