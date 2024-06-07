CREATE OR ALTER PROCEDURE noteBookList (
    @noteId VARCHAR(200),
    @noteTitle VARCHAR(200),
    @noteContent VARCHAR(200),
    @noteCreationDate VARCHAR(200)
)
AS
BEGIN
    INSERT INTO notebookDetails(noteId,noteTitle,noteContent,noteCreationDate) VALUES(@noteId,@noteTitle,@noteContent,@noteCreationDate)
END