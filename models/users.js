/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		userId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'user_id'
		},
		employeeId: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'employee_id'
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'first_name'
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'last_name'
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'username'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'password'
		},
		loginCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'login_count'
		},
		loginAttemptError: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'login_attempt_error'
		},
		lastLogin: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_login'
		},
		userIdCreated: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'user_id_created'
		},
		createdTime: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'created_time'
		},
		userIdUpdated: {
			type: DataTypes.BIGINT,
			allowNull: false,
			field: 'user_id_updated'
		},
		updatedTime: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'updated_time'
		},
		isDeleted: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
			field: 'is_deleted'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email'
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
