import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("festas")
class Festas {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", {nullable: false, length: 100})
    party_name: string;

    @Column("varchar", {nullable: false, length: 100})
    description: string;

    @Column("varchar", {nullable: false, length: 100})
    party_date: string;

    @Column("int")
    criador: number;
}

export default Festas