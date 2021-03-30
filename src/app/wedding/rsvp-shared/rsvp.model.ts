export class RSVP{
    public name: string;
    public email: string;
    public attendance: boolean;
    public numPersons : number;
    public assistingPeople : string[];
    public message : string;

    constructor(name : string, email: string, isGoing: boolean){
        this.name = name;
        this.email = email;
        this.attendance = isGoing;
    }
}