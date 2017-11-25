import { Model } from 'alaska';

export default class ArticleCat extends Model {
  static label = 'Article Category';
  static titleField = 'name';
  static defaultColumns = '_id name parent';

  static api = {
    list: 1,
    paginate: 1,
  };

  static fields = {
    name: {
      label: 'Name',
      type: String,
      required: true
    },
    parent: {
      label: 'Parent Category',
      ref: ArticleCat
    }
  };
}
