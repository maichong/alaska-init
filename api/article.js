import Article from '../models/Article';

/**
 * http://localhost:5000/api/article/hots
 */
export async function hots(ctx) {
  let list = await Article.find().where('hot', true).limit(10);
  ctx.body = list.map((record) => record.data());
}
