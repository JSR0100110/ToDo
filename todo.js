let input= prompt("What would you like to do?")
const todos=['Collect veggies','Clean the bedroom'];
while(input!='quit' && input !=='q')
{
if(input=='list'){
 console.log('*********');
for(let i=0;i<todos.length;++i)
   console.log(`${i}: ${todos[i]}`);
 console.log('*********');

}
else if(input=='new')
{
    const newtodo=prompt('What do you want to add?');
    todos.push(newtodo);
    console.log(`${newtodo} -> added to the list! :)`);
    
}

else if(input==='delete')
{
    const index=prompt('Enter index to delete');
    console.log(index +"->the item at this index is ->"+ todos[index]);
    todos.splice(index,1);
    console.log('new list\n'+todos);
}
input=prompt("What would you like to do?")

}

console.log("Cool See you again!");












/*{if(input=== 'list')
   {console.log('*************');
   for(let i=0;i<todos.length;++i)
   console.log('${i}: ${todos[i]}');
   console.log('*************');}
   else if(input==='new')
   {
      const newtodo=prompt('Ok, what is the new todo?');
      todos.push(newtodo);
      console.log("Added to the list")
   }
   else if(input==='delete')
{
    const index=prompt('Ok, enter an index to delete');
    console.log(index);
    todos.splice(index,1);
    console.log(todos);
    console.log("Removed");
}*/