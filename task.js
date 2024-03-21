const taskOne = async () => {
    await new Promise((resolve) =>{
        setTimeout(function() {
            console.log('this is task 1');
            resolve();
        }, 500);
    });
};

const taskTwo = () => { 
    console.log("this is task 2");
};

const taskTree = async () => {
    await new Promise((resolve) =>{
        setTimeout(function() {
            console.log('this is task 3');
            resolve();
        }, 1000);
    });
};

await taskOne();
taskTwo(); 
await taskTree();
