        
        let counter = document.getElementById('counter');
        let num = 0;
        let sum = [];
        let total = document.getElementById('total');
        


        function incrementNum() {
            counter.innerText = ++num;
            
        }

        function decrementNum(){
            num = num - 1;
            counter.innerText = num;
        }

        function decrementNumWith2() {

            num = num - 2;
            counter.innerText = num;
                   
        }

        function incrementNumWith2() {

            num = num + 2;
            counter.innerText = num;
       
        }

        function saveCount() {
            sum.push(num);
            let totalSum = 0;

            for (let i = 0; i < sum.length; i++){
                
                totalSum += sum[i];          

            }

            total.innerText = 'Total: ' + totalSum;
        }

        function resetCount() {
            num = 0;
            counter.innerText = num;
        }

        function clearTotalCount(){
            sum = [];
            total.innerText = 'Total: ' + 0;
        }