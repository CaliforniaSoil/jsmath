function zero_negativity(array){
    for(i = 0; i < array.length; i++){
        if(array[i] < 0){
            return false
        }
    }
    return true
}
var arr = [3,4,6]
var test = zero_negativity(arr)
    console.log(test);

function is_even(int){
    if(int % 2 === 0){
        return true;
    }
    else if(int % 2 === 1){
        return false;
    }
}
var int = 2;
var test2 = is_even(int)
    console.log(test2);

function how_many_even(array){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(array[i] % 2 == 0){
            count++;
        }
    }
    return count;
}
var test3 = how_many_even(arr)
    console.log(test3);



function create_dummy_array(n){
    function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    var anArray = [];
    for(var i = 0; i < n; i++){
        var x = getRandomInt(0,9)
        anArray.push(x)
    }
    return anArray;
}
var n = 13;
var test4 = create_dummy_array(n)
    console.log(test4);

function random_choice(array){
    var item = array[Math.floor(Math.random()*array.length)]
    return(item)
}
var test5 = random_choice(arr)
    console.log(test5);

