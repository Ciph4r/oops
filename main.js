const Stack = function() {
  return {
    items: [],
    add: function(num){
      this.items.push(num)
    },
    remove: function(){
      return this.items.pop()
    },
    peek: function(){
      return this.items[this.items.length-1]
    }
  }
}



const Queue = function() {
  const que = Stack()
  que.remove = function(){
    return this.items.shift()
  }
  que.peek = function(){
    return this.items[0]
  }
  return que
  
}

module.exports = {
  Stack,
  Queue,
}