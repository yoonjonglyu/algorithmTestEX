(function main(N){
    const cache = [];
    let result = [];
    for(let int = 1; int <= N; int++){
        let number = int.toString();
        let state = 0;
        result[int] = int;
        for(let int2 = 0; int2 < number.length; int2++){
            state = state + parseInt(number[int2]);
        }
        cache[int-1] = int + state;
    }
    cache.map((number)=> result.splice(number, 1, "*"));
    result = result.filter((number)=> typeof(number) !== "string");
    result.map((number) => console.log(number));
})(10000);
