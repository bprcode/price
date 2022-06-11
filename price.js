let spend, best, bestHistory
let prices = [23, 5.99, 20.46, 11.99, 47.23]

best = 0

spend = function(amount=0, spendingLimit=50, history=[]){
    
    spend.memo ??= new Set
        if(amount === 0)
            spend.memo = new Set

        if(history.length == 0)
            for(let i in prices)
                history[i] = 0

    if(amount > spendingLimit) return
    
    if(amount > best){
        best = amount
        bestHistory = Array.from(history)
    }

      for(let i in prices){
        let newHistory = Array.from(history)
        newHistory[i]++

            if( ! spend.memo.has(newHistory.toString()) ){
                spend.memo.add(newHistory.toString())
                spend(amount + prices[i], spendingLimit, newHistory)
            }
    }
  }
