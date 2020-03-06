// function Util() {
//     let copyToClipboard = str => {
//         const el = document.createElement('textarea');
//         el.value = str;
//         el.setAttribute('readonly', '');
//         el.style.position = 'absolute';
//         el.style.left = '-9999px';
//         document.body.appendChild(el);
//         el.select();
//         document.execCommand('copy');
//         document.body.removeChild(el);
//     };
    
//     let showPopup = function(){
//         document.getElementsByClassName('popup')[0].style.display = 'block';
//         setTimeout(hiddenPopup, 500);
//     }
    
//     let hiddenPopup = function(){
//         document.getElementsByClassName('popup')[0].style.display = 'none';
//     }
//     console.log("util called")
// }

// export default Util;