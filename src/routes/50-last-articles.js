import Article from '../models/Article';

export default function (router) {
  router.get('/*', async(ctx, next) => {
    ctx.state.lastArticles = await Article.find().sort('-createdAt').limit(10);
    await next();
  });
}
