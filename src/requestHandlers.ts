export function start(){
    console.log('RequestHandler start was called');
    
    function sleep(milliSeconds){
        let startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
    return "Hello Start";
}

export function upload(){
    console.log('RequestHandler upload was called');
    return "Hello Upload";
}

export function download(){
    console.log('RequestHandler download was called');
    return "Hello Download";
}