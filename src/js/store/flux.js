const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPlanets: async () => {
				const url = "https://3000-gray-cattle-bu6ry8c3.ws-us03.gitpod.io/planets/";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();

				console.log(">>DATA PLANETS>>", data);

				setStore({ planets: data });
			},
			loadCharacters: async () => {
				const url = "https://3000-gray-cattle-bu6ry8c3.ws-us03.gitpod.io/people/";

				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();
				console.log(">>DATA PEOPLE>>", data);
				setStore({ characters: data });
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: name => {
				//get the store
				const store = getStore();

				store.favorites.push(name);

				setStore({ favorites: store.favorites });

				// console.log(store.favorites);
			},
			deleteFavorites: id => {
				// console.log(id);
				//get the store
				const store = getStore();

				const newList = store.favorites.filter(function(currentValue, index) {
					return id !== index;
				});
				setStore({ favorites: newList });
			}
		}
	};
};

export default getState;
