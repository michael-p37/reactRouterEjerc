export type arrayType = {
    id: number;
    name: string;
    description: string;
}

const games: arrayType[] = [
  { id: 1, name: "Game 1", description: "Description for Game 1" },
  { id: 2, name: "Game 2", description: "Description for Game 2" },
  { id: 3, name: "Game 3", description: "Description for Game 3" },
  { id: 4, name: "Game 4", description: "Description for Game 4" },
  { id: 5, name: "Game 5", description: "Description for Game 5" },
];
 
export function getGames() {
  return new Promise<arrayType[]>((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 800);
  });
}
 
export function getGame(id: arrayType['id']) {
  return new Promise<arrayType>((resolve, reject) => {
    setTimeout(() => {
      const game = games.find((game) => game.id === id);
 
      if (game) {
        resolve(game);
      } else {
        reject(new Error(`Game with id ${id} not found`));
      }
    }, 800);
  });
}