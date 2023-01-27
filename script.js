const value = (document.getElementById('counter'));
// console.log(value.innerText);
// console.log(typeof(value.innerText));

// let i = null;
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}

let j = 0;

for(let i = 4000;i>=0;i--)
{
     setTimeout(()=>value.innerText = i,(j++)*1000);
}

    window.onload = timedRefresh(40000);

  
// console.log(count);