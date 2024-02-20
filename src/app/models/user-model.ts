export class UserModel {
    id: number;
    nombre: string;
    direccion: string;
    email: string;
    password: string;
    telefono: string;
    constructor(user:any){
        this.id = user.id;
        this.nombre = user.nombre;
        this.direccion = user.direccion;
        this.email = user.email;
        this.password = user.password;
        this.telefono = user.telefono;
    }
}
