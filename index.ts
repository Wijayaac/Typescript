/* 
*----------------------------
* challeng :1 Classes
*----------------------------
* 1.  Create a User class
* 2.  Add a firstName, lastName, and email property
* 3.  Add get to return a fullName
* 4.  add a method to check email is matches with user current email

*/ 
export class User{
    firstName: string;
    lastName:string;
    userEmail:string;
    
    get fullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
    doesEmailMatch(userEmail:string) :boolean {
        return this.userEmail === userEmail;
    }

}