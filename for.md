var obj = [{ person: "Name 1", age: "2", company: "GUVI" },
            { person: "Name 2", age: "5", company: "GUVI geek" },
            { person: "Name 3", age: "8", company: "GUVI geek network" }];
        for (var i in obj) {
            console.log(obj[i]);
        }
        for (var j of obj){
            console.log(j)
        }
        obj.forEach(function(k){
          console.log(k)  
        })
        for (let l=0;l<obj.length;l++){
            console.log(obj[l])
        }
        
Output:
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }
{ person: 'Name 1', age: '2', company: 'GUVI' }
{ person: 'Name 2', age: '5', company: 'GUVI geek' }
{ person: 'Name 3', age: '8', company: 'GUVI geek network' }
