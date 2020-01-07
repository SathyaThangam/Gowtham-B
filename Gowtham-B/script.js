    (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', "GTM-PHZR5SB");
    
    function getRightValue() {
      let slidingObj = document.getElementById('sliding-object');
      let styles = window.getComputedStyle(slidingObj);
      let rightAsInt = parseInt(styles.right, 10);
      return rightAsInt;
    }

    function setRightValue(value) {
      let slidingObj = document.getElementById('sliding-object');
      slidingObj.style.right = `${value}px`;
    }

    var myfun = () => {
      document.getElementById("prev").disabled = false;
      let val = getRightValue();
    if(val<=800 && val >0){
      document.getElementById("next").disabled = false;
      val-=400;
      setRightValue(val);
    }
    else{
      document.getElementById("next").disabled = true;
    }
  }
    
  var myfunn = () => {
    document.getElementById("next").disabled = false;
    let val = getRightValue();
    // console.log(val);
       if(val<800){
        document.getElementById("prev").disabled = false;
       val+=400;
       setRightValue(val);
      }
      else{
        document.getElementById("prev").disabled = true;
      }
  }
  function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function opensignupForm() {
  document.getElementById("signupForm").style.display = "block";
}
function closesignupForm() {
  document.getElementById("signupForm").style.display = "none";
}

function store(){
     
     var emailid = document.forms["signupform"]["mail"].value;
     var Password= document.forms["signupform"]["pass"].value;
    //  var inputEmail= document.getElementById("email");
    //  var inputPassword= document.getElementById("password");
     localStorage.setItem("email", emailid);
     localStorage.setItem("password", Password);
    //  localStorage.setItem("email", inputEmail.value);
    //  localStorage.setItem("password", inputPassword.value );
    }
function compare(){
    var inputEmail= document.getElementById("email").value;
    var inputPassword= document.getElementById("password").value;
    var mail = localStorage.getItem('email');
    var pass =localStorage.getItem('password');
    if((inputEmail==mail) && (inputPassword==pass))
    {
        alert("account is logged in");
    }
    else
    {
        alert("please try again");
    }

}