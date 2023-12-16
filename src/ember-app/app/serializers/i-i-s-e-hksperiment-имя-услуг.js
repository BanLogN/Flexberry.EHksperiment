import { Serializer as ИмяУслугSerializer } from
  '../mixins/regenerated/serializers/i-i-s-e-hksperiment-имя-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ИмяУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
