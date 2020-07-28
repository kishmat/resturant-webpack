import tabone from './tabOne'
import tabtwo from './tabTwo'
import './main.css'
// import $ from 'jquery'
var head = `<h3 class="nav"> <span id="menu" > Menu </span> <span id="contact">Contact</span></h3> `
document.getElementById('heading').insertAdjacentHTML('beforebegin',head)
document.getElementById('contact').addEventListener('click',function(){
    // console.log(document.getElementById('heading'))
    document.getElementById('heading').innerHTML = ''
    tabtwo()
})
document.getElementById('menu').addEventListener('click',function(){
    document.getElementById('heading').innerHTML = ''
    tabone()
})

// if(document.getElementsByName('tab')[0].value === 'on'){
//     console.log(1)
//     tabone()
// }
// // tabone()
// else{

//     tabtwo()
// }
// console.log("Hello")
var content  = document.getElementById('content')
// console.log(content)
content.insertAdjacentHTML('beforeend','<h1>Hotel</h1>')
content.insertAdjacentHTML('afterend','<img src="https://data.tibettravel.org/assets/images/tibet-hotels/dwarikas-hotel,-kathmandu01.webp"/>')
content.insertAdjacentHTML('afterend',
'<p>Our hotel is situated in the center of old Moscow, and surrounded by worldwide fame monuments, museums, temples, historical buildings. All our rooms combine elements of style, elegant and modern facilities and provide you everything for a comfortable stay. All rooms have individual air conditioning, bathroom with a separate bath or shower (depending on the category of room), free Wi-Fi, satellite TV.Planning the day, you will not depend on the choice of vehicles. The low traffic congestion within Sadovaya Ring allows you traveling by car</p>')