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
				const url = "https://3000-azure-sheep-z9m0ha83.ws-us04.gitpod.io/planets/";
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
				const url = "https://3000-azure-sheep-z9m0ha83.ws-us04.gitpod.io/people/";

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
			//[GET] /users/<int:user_id>/favoritesGet all the favorites that belong to the user with the id = user_id
			loadUserFavoritos: async () => {
				const url = "https://3000-silver-mandrill-m4t2ud0g.ws-us03.gitpod.io/getuserfav/" + 3;

				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();
				// console.log(">>DATA FAVORITES USERID>>", data);

				let listNames = "";

				//get the store
				const store = getStore();

				let listNameFavorite = data.map(async elm => {
					// console.log("elm.idpeople " + elm.idpeople);

					if (elm.idpeople === null) {
						listNames = store.planets.map(item => {
							if (item.id === elm.idplanet) {
								return item.name;
							}
						});
					}
					// console.log("elm.idplanet " + elm.idplanet);
					if (elm.idplanet === null) {
						listNames = store.characters.map(item => {
							if (item.id === elm.idpeople) {
								return item.name;
							}
						});
					}
					return listNames;
				});

				let finalData = await Promise.all(listNameFavorite);
				// console.log("listNameFavorite <<>> " + finalData);

				let res = finalData.map(item => {
					store.favorites.push(item);
				});

				setStore({ favorites: store.favorites });
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
