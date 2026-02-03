var form=document.getElementById('register')
var nname=document.getElementById('form3Example1q')
var email=document.getElementById('sss')
var phone=document.getElementById('int')
var select=document.getElementById('sel')
var alluser=JSON.parse(localStorage.getItem('user'))||[]
form.addEventListener('submit',function(event){
    event.preventDefault()
 const dates = calculateExpireDate(select.value);
var user={
name:nname.value,
email:email.value,
phone:phone.value,
memmbership:select.value,
statrtDate: dates.start,
expireDate: dates.expire
 }
alluser.push(user)
localStorage.setItem('user',JSON.stringify(alluser))
  alert('Registration successful ');
})
//---------------------------calculate---------------------
function calculateExpireDate(select) {
  const startDate = new Date();
  const expireDate = new Date(startDate);

  if (select === 'Monthly') {
    expireDate.setMonth(expireDate.getMonth() + 1);
  } 
  else if (select === '3Months') {
    expireDate.setMonth(expireDate.getMonth() + 3);
  } 
  else if (select === 'yearly') {
    expireDate.setFullYear(expireDate.getFullYear() + 1);
  }

  return {
    start: startDate.toLocaleDateString(),
    expire: expireDate.toLocaleDateString()
  };
}