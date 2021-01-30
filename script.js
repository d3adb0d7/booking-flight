        //first class ticket increase
        const firstincreasebtn = document.getElementById("first-increase");
            firstincreasebtn.addEventListener("click",function(){
            handelticketchange('first',true);
        });

        //first class ticket decrease
        const firstdecreasebtn = document.getElementById("first-decrease");
            firstdecreasebtn.addEventListener("click",function(){
            handelticketchange('first',false);  
        });

        //Economiy class ticket increase
        const ecoincreasebtn = document.getElementById("eco-increase");
            ecoincreasebtn.addEventListener("click",function(){
             handelticketchange('eco',true);
        });

        //Economiy class ticket decrease
        const ecodecreasebtn = document.getElementById("eco-decrease");
            ecodecreasebtn.addEventListener("click",function(){
            handelticketchange('eco',false);  
        });
        
        //Book Now Button 
        const bookNowbtn = document.getElementById("booknow") ;
        bookNowbtn.addEventListener("click",function(){
            const removebooking = document.getElementById("booking-form");
            removebooking.style.display = "none";
            const confirmationArea = document.getElementById("confirmation");
            confirmationArea.style.display="block"
        })

        //*function section //*

        //Handel Ticketchange Function
            function handelticketchange(ticketclass,isincrease){
            const ticketamount = document.getElementById(ticketclass + 'defaultvalue');
            const ticketamountNumber = parseInt(ticketamount.value);
            let tickettotal = ticketamountNumber
            if (isincrease == true) {
                tickettotal = ticketamountNumber + 1;
            }
            if (isincrease == false && ticketamountNumber > 0) {
                tickettotal = ticketamountNumber - 1;
            }
            ticketamount.value = tickettotal;
            Totalcalculation();
        }

        //Total calculation function
        function Totalcalculation(){
        const bClassCal = document.getElementById("firstdefaultvalue").value;
        const bClassCalnum = parseInt(bClassCal);
        const bClassCaltotal = bClassCalnum * 150 ;
        const ecoclass = document.getElementById("ecodefaultvalue").value;
        const ecoclassCalnum = parseInt(ecoclass);
        const ecoClatotal = ecoclassCalnum * 100;
        const subtotal = bClassCaltotal + ecoClatotal;
        document.getElementById("subtotalprice").innerText = subtotal;
        const tax = subtotal * 0.1 ;
        document.getElementById("vat").innerText = tax;
        const total = subtotal + tax ;
        document.getElementById("totalprice").innerText = total ;
        }