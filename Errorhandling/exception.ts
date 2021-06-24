// Java : exception
// JavaScript: error class 존재

// 예상할 수 있는 에러는: error Vs. 예상치 못한 것을 exception 이라고 한다.

// Error (exceoption): try -> catch -> finally
// 코드를 많이 쓰는 것보다 정말 에러가 발생하는 부분에 try를 해준다.

function readFile(fileName: string) : string {
    if (fileName === "not exists") {
        throw new Error("There is no file");
    }
    return 'file content 📇';
}

function closeFile(fileName: string) {
    //
}



// try {
//     console.log(readFile("not exists"));
// }
// catch(error) {
//     console.log('catched!');
// }
// finally {
//     closeFile("not exists");
//     console.log("finally!!");
// }

function run() {
    try {
        console.log(readFile("not exists"));
    }
    catch(error) {
        console.log('catched!');
        return;
    }
    finally {
        closeFile("not exists");
        console.log("finally closed!!");
    }
}

run();