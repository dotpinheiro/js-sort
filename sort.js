class Sort {

    selection(array){   
        console.log("Selection prev:",JSON.stringify(array))  
        for(let i = 0; i < array.length; i++){
            let min_index = i;
            for(let j = i + 1; j < array.length; j++){
                if(array[j] < array[min_index]){
                    min_index = j;
                }
            }
            if(array[i] > array[min_index]) this.#swap(array,i, min_index)
        }
        console.log("Selection next:",JSON.stringify(array))
    }

    bubble(array){
      console.log("Bubble prev:",JSON.stringify(array))
      let swapped = true
      while(swapped){
            swapped = false
            for(let j = 0; j < array.length - 1; j++){
                if(array[j] > array[j + 1]){
                    this.#swap(array, j, j +1)
                    swapped = true
                }
           }
      }
      console.log("Bubble next:",JSON.stringify(array)) 
    }

    insertion(array){
        console.log("Insertion prev:",JSON.stringify(array))
        for(let i = 1; i < array.length; i++){
            let key = array[i]
            let j = i - 1
            while((j > - 1) && key < array[j]){
                array[j + 1] = array[j]
                j--;
            }
            array[j + 1] = key
        }  
        console.log("Insertion next:",JSON.stringify(array))  
    }

    mergeSort(array){
        console.log("Merge prev:",JSON.stringify(array))
        array = this.#mergeSortRec(array)
        console.log("Merge next:",JSON.stringify(array))
    }

    quick(array){
        console.log("Quicksort prev:",JSON.stringify(array))
        array = this.#quickSortRec(array, 0, array.length)
        console.log("Quicksort next:",JSON.stringify(array))
    }

    tim(array){
        console.log("Tim prev:",JSON.stringify(array))
        array = array.sort()
        console.log("Tim next:",JSON.stringify(array))
    }

    #swap(array, leftIndex, rightIndex){
        [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]]
    }

    #mergeSortRec(array){
        const half = array.length / 2
        if(array.length <= 1) return array
        const left = array.splice(0, half)
        const right = array
        return this.#merge(this.#mergeSortRec(left), this.#mergeSortRec(right))
    }

    #merge(left, right){
        const array = []
        while(left.length && right.length){
             if(left[0] < right[0]) array.push(left.shift())
             else array.push(right.shift())
        }
        return [ ...array, ...left, ...right ]
    }

    #quickSortRec(array, start = 0, end = array.length - 1){
        if(start >= end) return array
        const pivot = array[0]

        const left = array.filter((elem) => elem < pivot)
        const right = array.filter((elem) => elem > pivot)

        return [...this.#quickSortRec(left), pivot, ...this.#quickSortRec(right)]
    }

}

module.exports = new Sort()