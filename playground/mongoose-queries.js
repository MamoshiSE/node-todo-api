const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/modules/todo');
const {User} = require('./../server/modules/user');

var userId = '5b4a7a93ce47b000ec9654a6'
//var id = '5b9d4fd4faf1d33138ce522c';
//
//if(!ObjectID.isValid(id)) {
//	console.log('ID not valid');
//}
//
////Todo.find({
////	_id: id
////}).then((todos) => {
////	console.log('Todos', todos)
////});
////
////Todo.findOne({
////	_id: id
////}).then((todo) => {
////	console.log('Todo', todo)
////});
//
//Todo.findById(id).then((todo) => {
//	if(!todo) {
//		return console.log('Id not found');
//	}
//	console.log('Todo by id', todo)
//}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
	if(!user) {
		return console.log('Id not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));