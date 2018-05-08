class notify {

  constructor(time){
    this.time = time;
  }

  /**
   * Notify user about all the events 
   * @param {String} message
   */

  showmessage(message){
    // console.log(message);
    let time = this.time;
    let div = document.createElement("div");
    div.innerText = message;
    setTimeout(function(){
      document.body.appendChild(div);
    },time);
    this.time+=1000;
  }

}
export default new notify(1000);
