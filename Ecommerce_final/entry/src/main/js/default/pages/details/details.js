import router from '@system.router';
export default {
    data: {
        back: "<<",
        inx: 1,
    },
    indexPage: function(){
        router.push({
            uri: "pages/index/index"
        })
    },
    incrementVal: function(){
        this.inx += 1;
    },
    decrementVal: function(){
        if(this.inx!=0)
            this.inx -= 1;
    }
}