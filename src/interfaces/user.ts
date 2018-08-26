/**
 * Define interface for User Model
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

export interface IUser {
	email: string;
	password: string;
	passwordResetToken: string;
	passwordResetExpires: Date;

	facebook: string;
	twitter: string;
	google: string;
	github: string;
	instagram: string;
	linkedin: string;
	steam: string;
	tokens: string;

	fullname: string;
	gender: string;
	geolocation: string;
	website: string;
	picture: string;
}

export default IUser;
