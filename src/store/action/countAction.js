


export function increment(data){
    return {
        type: 'counter/incremented',
        value: data
    }
}



export function decrement(data){
    return {
        type: 'counter/decremented',
        value: data
    }
}