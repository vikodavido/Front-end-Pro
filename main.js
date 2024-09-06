let this_is_number = 1;
let this_is_string = 'Viko';
let his_is_object = {
    name: 'Viko'
};
let this_is_boolean= true;
let this_is_undefined = undefined;
let this_is_symbol= Symbol('Viko');
let this_is_fn = function() {};
let this_is_null = null;

function lesson_3 (valString, val) {    
    console.log(valString + ' this is: ' + typeof val);
}
console.log('Lesson 3, part 1.');
console.log('-------------------');
lesson_3(String(this_is_number), this_is_number);
lesson_3(String(this_is_string), this_is_string);
lesson_3(String(his_is_object), his_is_object);
lesson_3(String(this_is_boolean), this_is_boolean);
lesson_3(String(this_is_undefined), this_is_undefined);
lesson_3(String(this_is_symbol), this_is_symbol);
lesson_3(String(this_is_fn), this_is_fn);
console.log('-------------------');