import NotebookService from "../service/service";


let myNoteBook = new NotebookService()

export const addBook = async (req:Request, res:Response) =>{
    try {
       let {noteId, noteTitle,noteContent,noteCreationDate} = req.body;

       let noteStore = {
        noteId,
        noteTitle,
        noteContent,
        noteCreationDate,
       }
    } catch (error) {
        
    }
}
