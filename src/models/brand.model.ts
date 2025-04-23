import { DataTypes, Model, Optional } from "sequelize";
import { Brand } from "../interfaces/brand.interface";
import sequelize from "../config/database";

type BrandCreationAttributes = Optional<Brand, 'id'>;

export class BrandModel extends Model<Brand, BrandCreationAttributes> {
    public id!: number;
    public descripition!: string;
};



BrandModel.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        field: 'id'
    },
    descripition: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: 'descricao'
    }
}, {
    tableName: 'marca',
    sequelize,
    timestamps: false
});