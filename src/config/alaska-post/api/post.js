import Post from 'alaska-post/models/Post';

export async function hots(ctx) {
  let list = await Post.find().sort('-hots').limit(10);
  ctx.body = list.map((record) => record.data());
}
