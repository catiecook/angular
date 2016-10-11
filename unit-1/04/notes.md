#Expressions and Built in Filers

## {{ }}
- similar to the handlebars used in templating but not completely the same functionally
- you cannot write conditionals or loops inside an expressions
_it is not best practice to have complex logic in views_
_move more complex code to the controller_

#Built in Filters

1. Currency
Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default symbol for current locale is used.

```
{{ currency_expression | currency : symbol : fractionSize}}
```
```javascript
$filter('currency')(amount, symbol, fractionSize)
```

2. Date
Formats date to a string based on the requested format.
```
{{ date_expression | date : format : timezone}}
```
``` javascript
$filter('date')(date, format, timezone)
```
3. filter
Selects a subset of items from array and returns it as a new array.
```
{{ filter_expression | filter : expression : comparator : anyPropertyKey}}
```
```javascript
$filter('filter')(array, expression, comparator, anyPropertyKey)
```
4. json
Allows you to convert a JavaScript object into JSON string.
```
{{ json_expression | json : spacing}}
```
```javascript
$filter('json')(object, spacing)
```

5. limitTo
Creates a new array or string containing only a specified number of elements. The elements are taken from either the beginning or the end of the source array, string or number, as specified by the value and sign (positive or negative) of limit. Other array-like objects are also supported (e.g. array subclasses, NodeLists, jqLite/jQuery collections etc). If a number is used as input, it is converted to a string.
```
{{ limitTo_expression | limitTo : limit : begin}}
```
```javascript
$filter('limitTo')(input, limit, begin)
```
6. orderBy
Returns an array containing the items from the specified collection, ordered by a comparator function based on the values computed using the expression predicate.
```
{{ orderBy_expression | orderBy : expression : reverse : comparator}}
```
```javascript
$filter('orderBy')(collection, expression, reverse, comparator)
```

More on [Angularjs.org] (https://docs.angularjs.org/api/ng)
