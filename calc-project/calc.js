
const calcFunc = e => {
    let eventResult = e.target.innerText;
    let aaa=document.querySelector('.sum').innerText
    //console.log(aaa, typeof aaa, isNaN(aaa))
    const sumItem = document.querySelector('.sum');
    aaa = eventResult;
    // console.log(isNaN(aaa))
    if(isNaN(aaa)){
        return sumItem.innerText = 0;
    }else if(parseInt(sumItem.innerText) === 0){
        return sumItem.innerText = parseInt(sumItem.innerText)+parseInt(eventResult);
    }else {
        return sumItem.innerText += eventResult;
    }
}