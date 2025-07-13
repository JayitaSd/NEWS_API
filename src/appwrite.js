/*import { Client, Databases, Query, title } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID= import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const ENDPOINT_ID = import.meta.env.VITE_APPWRITE_ENDPOINT;

const client = new Client()
  .setEndpoint(ENDPOINT_ID)
  .setProject(PROJECT_ID)

const database = new Databases(client);
export const updateSearchCount = async( searchTerm, movie) =>{
  //if seacrh term exists in the database
  try{
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('searchTerm', searchTerm),
    ])
    if(result.documents.length > 0){
      const doc = result.documents[0];
      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$title, {
        count: doc.count + 1,
      })
    }else{
      await database.createDocument()
    }
  }catch(error){
    console.log(error);
  }

  console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID, ENDPOINT_ID);

}*/