//倒计时
function countDown(times, objc) {
	var time=null;
    time = times - (new Date().getTime());
    i = parseInt((time / 1000) / 60);
    s = parseInt((time / 1000) % 60);
    ms = String(Math.floor(time % 1000));
    ms = parseInt(ms.substr(0, 2));
    if (i < 10) i = '0' + i;
    if (s < 10) s = '0' + s;
    if (ms < 0) ms = '00';
	var down=null;
	if(time<=0){
		clearInterval(down);
	}else{
        document.getElementById(objc).innerHTML='<span class="minute">' + i + '</span>:<span class="second">' + s + '</span>:<span class="millisecond">' + ms + '</span>';
		down=setTimeout(function() {
			countDown(times, objc);
		},30); 
	}    
}	
