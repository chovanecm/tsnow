/**
 GlideAggregate enables you to easily create database aggregation queries.

The scoped GlideAggregate class is an extension of GlideRecord and provides database aggregation (COUNT, SUM, MIN, MAX, AVG) queries. This functionality can be helpful when creating customized reports or in calculations for calculated fields. The GlideAggregate class works only on number fields.

When you use GlideAggregate on currency or price fields, you are working with the reference currency value. Be sure to convert the aggregate values to the user's session currency for display. Because the conversion rate between the currency or price value (displayed value) and its reference currency value (aggregation value) might change, the result may not be what the user expects.
@todo Only the most used methods are here. Add the others and remove this line.
 */
declare type GlideAggregate<T = any> = internal.BaseRecord<T> & internal.GlideElements<T> & {
  /**
         * Adds an aggregate.
         *
         * @param {servicenow.AggregateOperator} aggregate - Name of the aggregate to add, for example, COUNT, MIN, or MAX
         * @param {keyof T} column - (Optional) Name of the column to aggregate. Null is the default.
         */
        addAggregate(aggregate: internal.AggregateOperator, column?: internal.QueryKeys<T>): void;

        getAggregate(aggregate: internal.AggregateOperator, column?: internal.QueryKeys<T>): void;

        groupBy(fieldName: keyof T): void;

        /**
         * Orders the aggregates based on the specified aggregate and field.
         * @param {servicenow.AggregateOperator} aggregate - Type of aggregation.
         * @param {keyof T} fieldName - Name of the field to aggregate.
         */
        orderByAggregate(aggregate: internal.AggregateOperator, fieldName: internal.QueryKeys<T>);
}

declare namespace internal {
    type AggregateOperator = "COUNT" | "SUM" | "MIN" | "MAX" | "AVG"; 
}
declare const GlideAggregate: {
    new <T extends TableName>(tableName: T): GlideAggregate<TableIndex[T]>
}