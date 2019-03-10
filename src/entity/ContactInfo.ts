import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()

export class Contact{

    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:"varchar",length:"50"})
    first_name:string;
    @Column({type:"varchar",length:"50"})
    last_name:string;
    @Column({type:"varchar",length:"20"})
    phone:string;
    @Column({type:"varchar",length:"100"})
    address:string
    @Column()
    gender:string

}