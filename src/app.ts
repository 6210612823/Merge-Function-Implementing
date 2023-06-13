import { collection_generator } from "./generator"

function merge(collection_1: number[], collection_2: number[]): number[] {
    let merged_collection: number[] = []

    var members = collection_1.length + collection_2.length
    let i = 0

    // console.log(members)

    // tracker will track values inside collection_1 and collection_2
    let tracker_1 = 0
    let tracker_2 = 0

    // lock will be true if all the values in collection_1 or collection_2 are all used
    let lock1 = false
    let lock2 = false

    while (i < members) {

        // if all members in collection_1 used add all remaining values to merged_collection.
        if (lock1 == true) {
            merged_collection.push(collection_2[tracker_2])
            tracker_2++
        }

        // if all members in collection_2 used add all remaining values to merged_collection.
        else if (lock2 == true) {
            merged_collection.push(collection_1[tracker_1])
            tracker_1++
        }

        else {
            if ((lock1 == false) && (collection_1[tracker_1] <= collection_2[tracker_2])) {
                merged_collection.push(collection_1[tracker_1])

                if (tracker_1 < collection_1.length - 1) {
                    tracker_1++
                }
                else {
                    // all members in collection_1 used
                    lock1 = true
                }

            }

            else if ((lock2 == false) && (collection_1[tracker_1] >= collection_2[tracker_2])) {
                merged_collection.push(collection_2[tracker_2])

                if (tracker_2 < collection_2.length - 1) {
                    tracker_2++
                }
                else {
                    // all members in collection_2 used
                    lock2 = true
                }
            }
        }

        i++
    }

    // console.log(merged_collection.length)

    return merged_collection
}

var collection_1 = collection_generator()
var collection_2 = collection_generator()

console.log("collection_1 = " + (collection_1))
console.log("collection_2 = " + (collection_2))

console.log(merge(collection_1, collection_2))