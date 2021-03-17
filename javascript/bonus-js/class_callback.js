class counter {
  constructor(runCallBack){
    this.count = 0
    this.callback = runCallBack
  }
  increase(){
    this.count++
    console.log(this.count)
    if(this.count % 2 == 0) {
        this.callback(this.count)      
    }
  }

}

function printSomething() {
  console.log('lalala')
}


const printCount = new counter(printSomething)


printCount.increase()
printCount.increase()
printCount.increase()
printCount.increase()