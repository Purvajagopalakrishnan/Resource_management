export interface ICheckAvailability {
    Resource_Id: number;
    Resource_Name: string;
    Username: string;
    Startdate: Date;
    Enddate: Date;
}
export interface IBookResource{
    Resource_Id: number;
    Startdate: Date;
    Enddate: Date;
    Email: string;
}
