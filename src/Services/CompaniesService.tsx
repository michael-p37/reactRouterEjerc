import type { arrayType } from "./GamesService";

const companies: arrayType[] = [
  { id: 1, name: "Company 1", description: "Description for Company 1" },
  { id: 2, name: "Company 2", description: "Description for Company 2" },
  { id: 3, name: "Company 3", description: "Description for Company 3" },
  { id: 4, name: "Company 4", description: "Description for Company 4" },
  { id: 5, name: "Company 5", description: "Description for Company 5" },
];
 
export function getCompanies() {
  return new Promise<arrayType[]>((resolve) => {
    setTimeout(() => {
      resolve(companies);
    }, 800);
  });
}
 
export function getCompany(id: arrayType['id']) {
  return new Promise<arrayType>((resolve, reject) => {
    setTimeout(() => {
      const company = companies.find((company) => company.id === id);
 
      if (company) {
        resolve(company);
      } else {
        reject(new Error(`Company with id ${id} not found`));
      }
    }, 800);
  });
}