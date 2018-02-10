import { lastArticlesRequest } from '../redux/lastArticles';

export default async function (ctx) {
  ctx.state.store.dispatch(lastArticlesRequest());
  await ctx.show('index');
}
