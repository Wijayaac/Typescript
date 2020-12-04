export class User<T> {
    name : string;
    age : number;
    email: string;
    isMale : boolean;
    public classicUserData :T;

    /**
     * mergeUserData
     */
    public mergeUserData(params: T):void {
        const { name, isMale, age, email} = this;

        this.classicUserData = {name, isMale, age, email, ...params };
    }
}

interface ClassicUser {
    name : { first : string, last : string}
}
interface SecondClassicUser {
    name : {first: string, middle: string, last:string};
}

const firstUser = new User<ClassicUser>();
const seccondUser = new User<SecondClassicUser>();

firstUser.mergeUserData({name : {first : 'Kadek', last: ' Wijaya'}});
firstUser.classicUserData.name.first;

seccondUser.mergeUserData({name : {first : 'Kadek',middle:'AC', last: ' Wijaya'}});
seccondUser.classicUserData.name.middle;
