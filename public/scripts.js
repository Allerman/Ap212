const butDelet = document.querySelectorAll('.bntDelete');

butDelet.forEach(button =>{
    button.addEventListener('click',async ()=>{
        const itemId = button.getAttribute('data-id');
        try{
            const response = await axios.delete(`/Delete/${itemId}`);
            console.log(response.data.message);
            location.reload();
        }catch(err){
            console.log(err);
        };
    });
});