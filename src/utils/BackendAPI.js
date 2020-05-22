import Axios from "axios";
import { BACKEND_API_LOGIN_URL, BACKEND_API_SIGNUP_URL } from './AppConstant';

export const API_INSTANCE_LOGIN = Axios.create({
	baseURL: BACKEND_API_LOGIN_URL,
	method: "POST",
	headers: {
		'Content-Type': 'application/json',
	}
})

export const LOGIN_API = "home/validation";
export const LOGIN_API_PAYLOAD = { username: '', userpassword: '' };

export const API_INSTANCE_SIGNUP = Axios.create({
	baseURL: BACKEND_API_SIGNUP_URL,
	method: "POST",
	headers: {
		'Content-Type': 'application/json',
	}
})

export const SIGNUP_API = "register";
export const SIGNUP_API_PAYLOAD = {
	name: "",
	email: "",
	username: "",
	userpassword: "",
}


