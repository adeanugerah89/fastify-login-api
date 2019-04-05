/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userApi', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email'
		},
		passwordDigest: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'password_digest'
		},
		isDeleted: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'is_deleted'
		},
		createdTime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'created_time'
		},
		updatedTime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'updated_time'
		},
		clientId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'client_id'
		}
	}, {
		tableName: 'user_api'
	});
};
