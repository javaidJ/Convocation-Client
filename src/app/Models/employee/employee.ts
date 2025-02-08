export class Employee {
    constructor(
        public filePath :string,
        public departmentName :string,
        public isDeleted :boolean,
        public id :string,
        public name :string,
        public email :string,
        public contactNo :string,
        public gender :Number,
        public empCode :string,
        public designation :Number,
        public departemntId :string,
        public file :null,
        
    ){}
}

export class EmployeeResponse {
    constructor(
        public isSucess:boolean,
        public message:string
    ){}
}
export class UpdateEmployee {
    constructor(
        public id:string,
        public name:string,
        public email:string,
        public contactNo:string,
        public gender:Number,
        public empCode:string,
        public designation:Number,
        public departemntId:string,
        public file:string,
        
    ){}
}
