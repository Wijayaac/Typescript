/* 
*----------------------------
* challeng :2 Inheritance
*----------------------------
* 1.  Use the User class bellow.
* 2.  Create an Admin class that extends User.
* 3.  Create a Guest class that implements User.
* 4.  Have both classes below pass firstName, lastName, and userEmail in their constructor

*/
export class User {
  firstName: string;
  lastName: string;
  userEmail: string;

  constructor(firstName: string, lastname: string, userEmail: string) {
    this.firstName = firstName;
    this.lastName = lastname;
    this.userEmail = userEmail;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  doesEmailMatch(userEmail: string): boolean {
    return this.userEmail === userEmail;
  }
}

export class Admin extends User {
  constructor(data: {
    firstName: string;
    lastName: string;
    userEmail: string;
  }) {
    super(data.firstName, data.lastName, data.userEmail);
  }
}
export class Guest implements User {
  firstName: string;
  lastName: string;
  userEmail: string;

  constructor(firstName: string, lastName: string, userEmail: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userEmail = userEmail;
  }
  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }
  doesEmailMatch(userEmail: string): boolean {
    return this.userEmail === userEmail;
  }
}
