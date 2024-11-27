
const readline=require("readline");
const posts=[
    {id:1,title:"70's rocks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit commodo purus et porta."
    },
    {id:1,title:"80's rocks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit commodo purus et porta."
    },
    {id:1,title:"90's rocks",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit commodo purus et porta."
    }
];
function listPost(){
    posts.forEach((item,index)=>{
        console.log(`${index+1}.post\nTitle: ${item.title}\nDescription: ${item.description}`)
    })
}
function addPost(newItem){
return new Promise((resolve,reject)=>{
    if(!newItem.title || !newItem.description ){
        reject("Please add a title and description.")
    }else{
        posts.push(newItem);
        resolve(newItem);
    }
})
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getNewItem(){
    return new Promise(resolve=>{
        rl.question("Add a title: ",(title)=>{
            rl.question("Add a description: ",(description)=>{
                resolve({title,description})
            })
        })
    })
}
async function showList() {
    try{
        listPost();
        const newItem=await getNewItem();
        await addPost(newItem);
        listPost();
    }catch(err){
        console.error(err);
    }finally{
        rl.close();
    }
}

showList();