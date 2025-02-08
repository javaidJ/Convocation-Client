export class DepartmentResponse {
    constructor(
        public isSucess:boolean,
        public message:string
    ){    }
}
export class DepartmentRequest {
    constructor(
        public id:string,
        public departmentName:string
    ){    }
}
export class postDepartment {
    constructor(
        public id:string,
        public departmentName:string
    ){    }
}
export class putDepartment {
    constructor(
        public id:string,
        public departmentName:string
    ){    }
}