

    function hideelementByid(ElementId){


         const element = document.getElementById(ElementId);

         element.classList.add('hidden');



    }



    function showelEmentbyid(ElementId){

     const show = document.getElementById(ElementId);

     show.classList.remove('hidden');


    }


    // function getalphabet(){

    // //  create alphabets


    //    const alphabetString ='abcdrfghijklmnopqrstuvwxyz';

    //    const alphabets = alphabetString.split('');

    //    console.log(alphabets);


    // // create index

    //   const ranDomnumber = Math.random() * 25;

    //   const index = math.round(ranDomnumber);
      
    //  const alphabet = alphabet[index];

    // //   console.log(index, alphabet );

    //   return alphabet;


    // }


    function  getrandomAlphabet(){


        const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';

        const alphabets = alphabetstring.split('');

        const randomnumber = Math.random() * 25;

        const index = Math.round(randomnumber);

        const alphabet = alphabets[index];

        return alphabet;




    }


    function setColorID (elementID){


      const element = document.getElementById(elementID)
      element.classList.add('bg-orange-400');


    }




