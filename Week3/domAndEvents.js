
let likeButton = document.getElementById('likeBtn');
let likeCount = document.getElementById('likeCount');


let count = 0; 
let isLiked = false;

likeButton.addEventListener('click', handleClick);
function handleClick(){
    if (!isLiked){
        count++;
        isLiked=true;
        likeButton.classList.add('liked');
    } 
   
    else {
        count--;
        isLiked = false;
    }
}