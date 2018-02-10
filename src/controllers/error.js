export default async function (ctx) {
  await ctx.show('error', {
    errorMessage: 'Unknown Error'
  });
}

export async function error404(ctx) {
  await ctx.show('error', {
    errorMessage: 'Not Found'
  });
}

export async function error500(ctx) {
  await ctx.show('error', {
    errorMessage: 'Internal Server Error'
  });
}
