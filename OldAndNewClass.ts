// new class 
export class Message{
    title;
    message;
    id;
}

// old class
 function Message2(title,message,id) {
     this.title = title;
     this.message= message;
     this.id= id;
 }

 const messageTest = new Message2('Say','Hello','First');
