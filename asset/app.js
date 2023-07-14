const btn = document.querySelector('.btn');
const ctn = document.querySelector('.container-notifications');
console.log(btn,ctn);

btn.addEventListener('click',()=>{
    console.log('btn cliqué');
    const notifications = document.createElement('div');
    notifications.classList.add('toast');
    console.log(notifications);
    notifications.innerText ='votre fichier est bien enregistré!';
    console.log(notifications);
    ctn.appendChild(notifications);

    //  utiliser setTimeOut directement
    setTimeout(() => {
        notifications.remove()
    }, 2000);

})