class ArrayHelper{
    ascending(size = 10){
        return Array(size)
            .fill(null)
            .map((val, index) => val = index)
    }

    descending(size = 10){
        return Array(size)
            .fill(null)
            .map((val, index) => val = (size - index))
    }

    random(size = 10){
        return Array(size)
            .fill(null)
            .map((val) => val = Math.floor(Math.random() * 1000))
    }
}

module.exports = new ArrayHelper()