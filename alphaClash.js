


    //    function play(){

         
    //     //home section

    //      const homescreen = document.getElementById('homeScreen');

    //      homescreen.classList.add('hidden');


    //     //playground section
        
    //      const playground = document.getElementById('playGround');

    //      playground.classList.remove('hidden');


    //    }


    function   continueGame(){

      const alphabet = getrandomAlphabet();

      console.log(alphabet);

      const currentalpha = document.getElementById('Yalpha')

      currentalpha.innerText = alphabet;

      setColorID(alphabet);

    }




    function play(){

        hideelementByid('homeScreen');

        showelEmentbyid('playGround');
   
         continueGame();

    }






    
    // keyup section



    function  handlekeypress (event){

      console.log(event.key);


  }



  document.addEventListener('keyup', handlekeypress)

