/**
 * Define User model
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

import * as bcrypt from 'bcrypt-nodejs';
import {
	Schema, Document
} from 'mongoose';

import mongoose from '../config/Database';
import { IUser } from '../interfaces/user';

export interface IUserModel extends IUser, Document {
	billingAddress(): string;
}

// Define the User Schema
export const UserSchema = new Schema({
	email: { type: String, unique: true },
	password: { type: String },
	passwordResetToken: { type: String },
	passwordResetExpires: Date,

	facebook: { type: String },
	twitter: { type: String },
	google: { type: String },
	github: { type: String },
	instagram: { type: String },
	linkedin: { type: String },
	steam: { type: String },
	tokens: { type: String },

	fullname: { type: String },
	gender: { type: String },
	geolocation: { type: String },
	website: { type: String },
	picture: { type: String }
}, {
	timestamps: true
});

// Password hash middleware
UserSchema.pre<IUserModel>('save', function (_next) {
	const user = this;
	if (!user.isModified('password')) {
		_next();
	}

	bcrypt.genSalt(10, (_err, _salt) => {
		if (_err) {
			_next(_err);
		}

		bcrypt.hash(user.password, _salt, null, (_err, _hash) => {
			if (_err) {
				_next(_err);
			}

			user.password = _hash;
			_next();
		});
	});
});

// Custom Method
UserSchema.methods.billingAddress = function (): string {
	const fulladdress = `${this.fullname.trim()} ${this.geolocation.trim()}`;
	return fulladdress;
};

const User = mongoose.model<IUserModel>('User', UserSchema);

export default User;
