
//Create the message
const MessagesGenerator = {
    msgStart : [ 'Be Yourself', 'Dream Bird', 'Rise Above', 'You Matter'],
    msgMiddle : [ 'You Can', 'Accept Yourself', 'Trust Yourself' ],
    msgEnd : [ 'Consistency=Success', 'Stay Focused','Move Forward','Try Again'],
    getRandomPhrase(phrases)  {
        return phrases[Math.floor(Math.random() * phrases.length)];
    },
    generateMessage() {
        return this.getRandomPhrase(this.msgStart) + ', ' + this.getRandomPhrase(this.msgMiddle) + ' & ' + this.getRandomPhrase(this.msgEnd)
    }
};

 //messenger;
console.log(MessagesGenerator.generateMessage());


