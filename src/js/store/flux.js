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
				const url = "https://www.swapi.tech/api/planets/";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();

				const fullDataPlanet = data.results.map(async (item, index, myArry) => {
					let allPlanetData = await fetch(item.url, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					return allPlanetData.json();
				});
				let finalDataPlanet = await Promise.all(fullDataPlanet);
				setStore({ planets: finalDataPlanet });
			},
			loadCharacters: async () => {
				const url = "https://www.swapi.tech/api/people/";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				});
				const data = await response.json();

				const fullDataCharacter = data.results.map(async (item, index, myArry) => {
					let allCharacterData = await fetch(item.url, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					return allCharacterData.json();
				});
				let finalDataCharacter = await Promise.all(fullDataCharacter);
				setStore({ characters: finalDataCharacter });
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
				console.log(id);
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
