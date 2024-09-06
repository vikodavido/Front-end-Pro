let btnPart1 = document.getElementById('btn-1');
let btnPart2 = document.getElementById('btn-2');


function part_1() {
    let this_is_number = 1;
    let this_is_string = 'Viko';
    let his_is_object = {
        name: 'Viko'
    };
    let this_is_boolean= true;
    let this_is_undefined = undefined;
    let this_is_symbol= Symbol('Viko');
    let this_is_fn = function() {};

    function logValueType (valString, val) {    
        console.log(`${valString} this is: ${typeof val}`);
    }
    console.log('Lesson 3, part 1.');
    logValueType(String(this_is_number), this_is_number);
    logValueType(String(this_is_string), this_is_string);
    logValueType(String(his_is_object), his_is_object);
    logValueType(String(this_is_boolean), this_is_boolean);
    logValueType(String(this_is_undefined), this_is_undefined);
    logValueType(String(this_is_symbol), this_is_symbol);
    logValueType(String(this_is_fn), this_is_fn);
    console.log('-------------------');
}





function chatWithDream() {
    confirm("Привіт друже! Я Мрія ;) Поговоримо? Якщо ти готовий, натисни ОК!");
    let data = {
        name: prompt("Напиши як звати тебе:"),
        dream: prompt("Розкажи мені про свою мрію:"),
        futureMessage: prompt("Що скажешь собі майбутньому?")
    }
    printMessage(data);
}
function printMessage(data) {
    console.log('Lesson 3, part 2.');
    console.log(`✨ Привіт, ${data.name}! Ти поділився чимось неймовірним! ✨`);
    console.log(`💭 Твоя мрія: "${data.dream}" – звучить дуже надихаюче!`);
    console.log(`⏳ А от що ти скажеш собі в майбутньому: "${data.futureMessage}".`);
    console.log("🚀 Сподіваюся, що всі твої мрії збудуться! Ти на правильному шляху! ✨");
    console.log('-------------------');
}

//--------------------------------------------------
btnPart1.addEventListener('click', part_1);
btnPart2.addEventListener('click', chatWithDream);


