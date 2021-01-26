
window.onload = blog
function blog(){
    var baseUrl = 'https://jsonplaceholder.typicode.com/';
            let btnShowUser = document.getElementById("showUser");
            var btnShowPosts = document.getElementById('showPosts');
            var userId = document.getElementById('userId');

            btnShowUser.addEventListener('click', showUser);
            btnShowPosts.addEventListener('click', showPosts);
            
            function showUser(){
                document.querySelector('#output').innerHTML = ""; 
                let id = userId.value;
                if (!id) return;
                fetch(baseUrl+'users/'+id)
                .then(res=>res.json())
                .then(data=>{
                    var p = document.createElement('p');
                    p.innerHTML = "Name: "+data.name+"</br>Email: "+data.email
                    +"</br>Address: "+data.address.suite+" "+data.address.street+", "+data.address.city+" "+data.address.zipcode;
                    document.querySelector('#output').append(p); 
                });
            }

            function showComment(id){
                document.querySelector('#output').innerHTML = ""; 
                if (!id) return;
                fetch(baseUrl+'comments?postId='+id)
                .then(res=>res.json())
                .then(data=>{
                    var p = document.createElement('p');
                    data.forEach(c=>{
                        
                        p.innerHTML += c.body+'</br>';
                        
                    })
                    document.querySelector('#output').appendChild(p); 
                    
                });
            }

            function showPosts(){
                document.querySelector('#output').innerHTML = ""; 
                let id = userId.value;
                if (!id) return;
                fetch(baseUrl+'posts?userId='+id)
                .then(res=>res.json())
                .then(data=>{
                    var ul = document.createElement('ul');
                    data.forEach(p => {
                        let il = document.createElement('il');
                        il.innerHTML = "<button id=\""+p.id+"\" onclick=\"showComment("+p.id+");\">Comments</button> "+p.title+"</br>";
                        ul.append(il);
                    });
                    
                    document.querySelector('#output').append(ul); 
                });
            }

            
    
}