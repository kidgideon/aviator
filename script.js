 let balance = 200;
 let stakeValue = 10;
 let aviation = 1;
 let stopValue = 0.00;
 let cashout;
 let endGame;
 let cashoutDetail = 'NO';
 let btn = document.querySelectorAll('.btn');
 let pageMode = 'DARK';

  const dispAviate = () => {
     document.querySelector('.Aviator').innerHTML = aviation.toFixed(2);
  }

 dispAviate()

  const updateStakeValue = () =>  {
     document.querySelector('.showvalue').innerHTML = stakeValue;
  }

   updateStakeValue()

    const setStakeValue = (param) => {
        
        switch(param) {
            case 'add' : 
                if (stakeValue >= balance) {
                    console.log('limits reached')
                } else {
                 stakeValue = stakeValue + 10;
                 updateStakeValue()
                }

                break;
            case 'minus':
                if (stakeValue <= 10) {
                    console.log('limits reached')
                } else {
                     stakeValue = stakeValue - 10;
                     updateStakeValue()
                }

                break;
        }
    }

 const updateBalance = () => {
      document.querySelector('.bal').innerHTML = balance.toFixed(0);
 }

  const userLuck = ['unlucky','ok','good','unlucky','lucky','unlucky','unlucky','unlucky','good','unlucky','unlucky','super-lucky','good','unlucky','unlucky','unlucky','unlucky','super-lucky','ok','good','unlucky','ok','unlucky','y\good','unlucky','unlucky','unlucky','ok','unlucky','good','God-did','uok','ok','unlucky'];

  updateBalance()

   const findStopValue = () => {
   let number = 0;

     const luckGetter = Math.round(Math.random() * userLuck.length);

    const luck = userLuck[luckGetter];
    console.log(luck);

      switch(luck) {
         case 'unlucky' :
             number = Math.random() * 3;
        break;
        case 'ok' :
             number = Math.random() * 5;
             break;
        case 'good': 
             number = Math.random() * 10;
             break;
        case 'lucky':
            number = Math.random() * 20;
            break;
        case 'super-lucky':
            number = Math.random() * 50;
            break;
        case 'God-did': 
            number = Math.random() * 100;
            break;
        default : 
            number = Math.random() * 10;
            break;
      }
  
        stopValue = number.toFixed(2);

        console.log(stopValue)
   }

  const start = () => {
    btn.forEach(button => {
        button.disabled = true;
    })
    aviation = 1.00;
    dispAviate()
    cashoutDetail = 'NO';
     
        document.querySelector('.Aviator').style.color = 'blue';
        
     document.querySelector('.zone-2').innerHTML = `<button onclick="cashout()" class='cashout'> cashout </button>`;
     findStopValue();

    const interl =  setInterval(() => {
        aviation += 0.01;
        dispAviate()

         if (aviation >= stopValue) {
            clearInterval(interl)
         document.querySelector('.Aviator').style.color = 'red';
         document.querySelector('.zone-2').innerHTML = `<button onclick="endGame()" class='endgame'> play again </button>`;
          switch(cashoutDetail) {
            case 'YES':
                console.log('cashed out')
                break;
            case 'NO': 
            setTimeout(() => {
                document.querySelector('.acc-stat').style.color = 'red';
                document.querySelector('.acc-stat').innerHTML = `sorry you lost ${stakeValue} naira`;
                setTimeout(() => {
                   document.querySelector('.acc-stat').innerHTML = '';
                }, 5000)
              }, )
                balance = balance - stakeValue;
                updateBalance();
                break;
          }
          btn.forEach(button => {
            button.disabled = false;
        })
         }
      }, 35);
  }
  


   cashout = () => {
    btn.forEach(button => {
        button.disabled = false;
    })
    cashoutDetail = 'YES';
      let collectedAmount = stakeValue * aviation;
       const organisedAmount = collectedAmount.toFixed(2);
       balance = balance + collectedAmount;
       updateBalance()

       setTimeout(() => {
        document.querySelector('.acc-stat').style.color = 'yellow';
         document.querySelector('.acc-stat').innerHTML = `congratulations you won ${organisedAmount} naira`;
         setTimeout(() => {
            document.querySelector('.acc-stat').innerHTML = '';
         }, 5000)
       }, )
       document.querySelector('.zone-2').innerHTML = `<button onclick="endGame()" class='endgame'> play again </button>`; 
   }

   endGame = () => {
    document.querySelector('.zone-2').innerHTML = ` <button onclick="start()" class="strt">start game</button>`;  
   }

    const black = 'black';
    const white = 'white';

       const toBlack = () => {
          document.body.style.backgroundColor = black;
          pageMode = 'DARK';
          console.log('dark now')

          if (pageMode === 'DARK') {
            document.querySelector('.area').innerHTML = `<button onclick="toLight()" class="light"> light mode</button>`;
           } else if (pageMode === 'LIGHT') {
            document.querySelector('.area').innerHTML = `<button onclick="toBlack()" class="light"> dark mode </button>`;
        
           }
          
     
       }

       const toLight = () => {
        document.body.style.backgroundColor = white;
        pageMode = 'LIGHT';
        console.log('light now')

        if (pageMode === 'DARK') {
            document.querySelector('.area').innerHTML = `<button onclick="toLight()" class="light"> light mode</button>`;
           } else if (pageMode === 'LIGHT') {
            document.querySelector('.area').innerHTML = `<button onclick="toBlack()" class="light"> dark mode </button>`;
           }
          
       }

       if (pageMode === 'DARK') {
        document.querySelector('.area').innerHTML = `<button onclick="toLight()" class="light"> light mode</button>`;
       } else if (pageMode === 'LIGHT') {
        document.querySelector('.area').innerHTML = `<button onclick="toBlack()" class="light"> dark mode </button>`;
    
       }
      
 