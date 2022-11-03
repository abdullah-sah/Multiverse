const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Author extends Model {}

// initialising table, need to pass in column names
// second argument to init needs to be { sequelize: ${insertNameOfDb}}
// can specify modelName to give table a different name to the class
Author.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		// modelName: 'Author'
	}
);

module.exports = Author;
