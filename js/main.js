// var prints = [
// 	{
// 		img: "img/bear.jpg",
// 		name: "Bear",
// 		price: 25
// 	},
// 	{
// 		img: "img/octopi.jpg",
// 		name: "Octopi",
// 		price: 12
// 	},
// 	{
// 		img: "img/HDM.jpg",
// 		name: "His Dark Materials",
// 		price: 18
// 	}
// ];

new Vue({
	el: "#app",
	data: {

message: "Hello World!!",
num: 56,

todos: [{ text: 'Yeet' }, { text: 'Yuhh' }, { text: 'Eskeetit' } ],

	



}


	// num: 56
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    // seen: false
    seen: true
  }
})

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js!'
	},

	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
})

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
	el: '#app-7',
	data: {
		groceryList: [
		{ id: 0, text: 'Vegetables' },
		{ id: 1, text: 'Cheese' },
		{ id: 2, text: 'Yo Mama' },
		]
	}
})

var vm = new Vue({
	// options
})

var data = { a: 1 }

// direct instance creation
var vm = new Vue({
	data: data
})
vm.a
// ^ => 1
vm.$data === data 
//  => true

// must use function when in Vue.extend()

var Component = Vue.extend({
	data: function () {
		return { a: 1 }
	}
})