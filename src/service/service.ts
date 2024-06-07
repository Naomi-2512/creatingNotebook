import { sqlConfiguration } from "../config/confure";
import { Mybook } from "../interface/interface";
import mssql from 'mssql'
import {v4} from "uuid";

export default class NotebookService {
    async createBook (book:Mybook){
        let pool = await mssql.connect(sqlConfiguration);
        let response = await (await pool.request()

        .input("noteId", v4)
        .input("noteTitle", book.noteTitle)
        .input("noteContent",book.noteContent)
        .input("noteCretionDate",book.noteCreationDate)
        .execute("noteBookList")).rowsAffected;

        if (response[0] < 1) {
            return{
                error:"notebook not created"
            }
        }
        else{
            return{
                message:"notebook created successfully"
            }
        }
    }
}