export class User{
    firstName: string;
    lastName:string;
    userEmail:string;
    constructor(firsName:string, lastName:string, userEmail:string) {
        this.firstName = firsName;
        this.lastName = lastName;
        this.userEmail = userEmail;
    }
    fullName():string{
        return this.firstName.concat(this.lastName);
    }

}
const user = new User('Kadek', 'Wijaya', 'wijaya@gmail');
user.fullName();