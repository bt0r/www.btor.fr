const Emote = {
  init () {
    let body = document.body.innerHTML;
    //document.body.innerHTML = document.body.innerHTML.replace('@@LUL', 'hi');
    const emotes = [...body.matchAll(/@@([A-Z]+)/)];
    emotes.forEach(function(emote) {
      const emoteKey = emote[1];
      const path = `/assets/images/emote/${emoteKey}.png`;
      const img = `<img src="${path}" class="emote" alt=""/>`;
      body = body.replace(emote[0],img);
    });
    document.body.innerHTML = body;
  }
};
export default Emote;
