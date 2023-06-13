export function collection_generator(): number[] {
    let collection: number[] = [];

    //random value
    var values = RandomInt(0, 10)

    //random integer
    let i = 0;
    let max = RandomInt(0, 10)
    let min = 0
    collection.push(max)

    while (i <= values) {
        min = max
        max = RandomInt(min, 100)
        collection.push(max)
        i++;
    }

    return collection
}

function RandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}