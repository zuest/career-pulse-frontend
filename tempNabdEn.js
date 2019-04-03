


let currentDataId = 0;
let rowCounter = 0;

function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
        console.log("1")
        $card.removeClass('hover');
    } else {
        console.log("2")
        $card.addClass('hover');
    }
}


async function fetchData() {
    let res = await fetch('careerEn.json');
    //let res = await fetch('http://www.qu.edu.qa/file_source/qu/students/global/JSON/careerEn.json');
    res = await res.json();
    obj = res;
    return obj;
}

// please refer to the following https://stackoverflow.com/questions/46078328/change-ids-of-child-elements-in-javascript-when-cloning-an-element
function AddRowAndLoad() {
    fetchData().then(data => {
        data.reverse();
    var original  = document.getElementById('profile-row' + rowCounter);
    var clone = original.cloneNode(true); // true means clone all childNodes and all event handlers
    rowCounter++;
    clone.id = "profile-row" + rowCounter;

    if(data[currentDataId+1] == null) { //if second column is empty only fill 1 columns
        console.log("1")
        clone.getElementsByClassName('row3')[0].innerHTML = null
        clone.getElementsByClassName('row2')[0].innerHTML = null
        for (let j = 0; j <10 ; j++) {
            if(clone.getElementsByClassName('hover')[j] != null){
                console.log(clone.getElementsByClassName('hover')[j].classList.remove('hover'))
            }
        }

        for (let i = 0; i < 1; i++) {
            clone.getElementsByClassName('qu-title')[i].id  = 't'+(currentDataId+i+1);
            clone.getElementsByClassName('qu-title')[i].innerHTML = data[currentDataId+i].title;

            clone.getElementsByClassName('imagery')[i].id = 'img'+(currentDataId+i+1); //front title
            clone.getElementsByClassName('imagery')[i].src = data[currentDataId+i].selectedEvent;

            clone.getElementsByClassName('profession')[i].id = 'd'+(currentDataId+i+1); //front date
            clone.getElementsByClassName('profession')[i].innerHTML = data[currentDataId+i].date;

            clone.getElementsByClassName('qu-backtitle')[i].id  = 'tb'+(currentDataId+i+1); //back title
            clone.getElementsByClassName('qu-backtitle')[i].innerHTML = data[currentDataId+i].title;

            clone.getElementsByClassName('mainContent')[i].id  = 'c'+(currentDataId+i+1);
            clone.getElementsByClassName('mainContent')[i].innerHTML = data[currentDataId+i].content;
        }
        currentDataId =  currentDataId + 3
        original.parentNode.appendChild(clone);
    }

    else if(data[currentDataId+2] == null){ //if third column is empty only fill 2 columns
        clone.getElementsByClassName('row3')[0].innerHTML = null

        for (let j = 0; j <10 ; j++) {
            if(clone.getElementsByClassName('hover')[j] != null){
                console.log(clone.getElementsByClassName('hover')[j].classList.remove('hover'))
            }
        }

        for (let i = 0; i < 2; i++) {
            clone.getElementsByClassName('qu-title')[i].id  = 't'+(currentDataId+i+1);
            clone.getElementsByClassName('qu-title')[i].innerHTML = data[currentDataId+i].title;

            clone.getElementsByClassName('imagery')[i].id = 'img'+(currentDataId+i+1); //front title
            clone.getElementsByClassName('imagery')[i].src = data[currentDataId+i].selectedEvent;

            clone.getElementsByClassName('profession')[i].id = 'd'+(currentDataId+i+1); //front date
            clone.getElementsByClassName('profession')[i].innerHTML = data[currentDataId+i].date;


            clone.getElementsByClassName('qu-backtitle')[i].id  = 'tb'+(currentDataId+i+1); //back title
            clone.getElementsByClassName('qu-backtitle')[i].innerHTML = data[currentDataId+i].title;

            clone.getElementsByClassName('mainContent')[i].id  = 'c'+(currentDataId+i+1);
            clone.getElementsByClassName('mainContent')[i].innerHTML = data[currentDataId+i].content;
        }
        currentDataId =  currentDataId + 3
        original.parentNode.appendChild(clone);
    }
    else{
        for (let i = 0; i < 3; i++) {

            for (let j = 0; j <10 ; j++) {
                if(clone.getElementsByClassName('hover')[j] != null){
                    console.log(clone.getElementsByClassName('hover')[j].classList.remove('hover'))
                }
            }



            clone.getElementsByClassName('qu-title')[i].id  = 't'+(currentDataId+i+1);
            clone.getElementsByClassName('qu-title')[i].innerHTML = data[currentDataId+i].title;

            clone.getElementsByClassName('imagery')[i].id = 'img'+(currentDataId+i+1); //front title
            clone.getElementsByClassName('imagery')[i].src = data[currentDataId+i].selectedEvent;

            clone.getElementsByClassName('profession')[i].id = 'd'+(currentDataId+i+1); //front date
            clone.getElementsByClassName('profession')[i].innerHTML = data[currentDataId+i].date;

            clone.getElementsByClassName('qu-backtitle')[i].id  = 'tb'+(currentDataId+i+1); //back title
            clone.getElementsByClassName('qu-backtitle')[i].innerHTML = data[currentDataId+i].title;

            clone.getElementsByClassName('mainContent')[i].id  = 'c'+(currentDataId+i+1);
            clone.getElementsByClassName('mainContent')[i].innerHTML = data[currentDataId+i].content;
        }
        currentDataId =  currentDataId + 3
        original.parentNode.appendChild(clone);
    }
}).catch(err => {
        document.getElementById('loadBtn').style.visibility = 'hidden'; // once an error thrown we hide the load button, which means no more data to show
    console.log(err)
})


}

window.onload = function () {
    fetchData().then(data => {
        data.reverse();
    document.getElementsByClassName('qu-title')[0].innerHTML = data[currentDataId].title;
    document.getElementsByClassName('qu-title')[1].innerHTML = data[currentDataId+1].title;
    document.getElementsByClassName('qu-title')[2].innerHTML = data[currentDataId+2].title;

    document.getElementsByClassName('profession')[0].innerHTML = data[currentDataId].date;
    document.getElementsByClassName('profession')[1].innerHTML = data[currentDataId+1].date;
    document.getElementsByClassName('profession')[2].innerHTML = data[currentDataId+2].date;

    document.getElementsByClassName('qu-backtitle')[0].innerHTML = data[currentDataId].title;
    document.getElementsByClassName('qu-backtitle')[1].innerHTML = data[currentDataId+1].title;
    document.getElementsByClassName('qu-backtitle')[2].innerHTML = data[currentDataId+2].title;

    document.getElementsByClassName('imagery')[0].src = data[currentDataId].selectedEvent;
    document.getElementsByClassName('imagery')[1].src = data[currentDataId+1].selectedEvent;
    document.getElementsByClassName('imagery')[2].src = data[currentDataId+2].selectedEvent;

    document.getElementsByClassName('mainContent')[0].innerHTML = data[currentDataId].content;
    document.getElementsByClassName('mainContent')[1].innerHTML = data[currentDataId+1].content;
    document.getElementsByClassName('mainContent')[2].innerHTML = data[currentDataId+2].content;

    currentDataId =  currentDataId + 3
}).catch(err => {
        console.log(err)
})
};







