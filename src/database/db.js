// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()


// criar o objeto que vai fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {

    // com comando sql eu vou? 1-criar uma tabela, 
    // 2-inserir dados na tabela, 
    // 3-consultar dados da tabela
    // 4-deletar um dado da tabela
    // criar uma tabela
    // usar a crase para poder quebrar a linha, se tiver aspas duplas ou simples 
    // vai dar problema
    // o ultimo item não tem virgula
    
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );

    // `)

    // //2 inserir dados da tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    //     "papersider",
    //     "Guilherme Gemballa, Jardim América.",
    //     "numero1",
    //     "Santa cataria",
    //     "rio do sul",
    //     "resíduos eletrônicos e lâmpadas"
    // ]




    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("cadastrado com sucesso")
    //     console.log(this)

    // }


    // db.run(query, values, afterInsertData)





    //3 consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)

    // })



    //4 deletar um dados da tabela
    // esse item está apenas em comentátio, caso eu necessite tirar alguma empresa de coleta de lixo
    // vai ficar no item abaixo entre colchetes está o 1 = [1] dessa forma iria retirar o item 1 se fosse o 2 
    // tiraria o item 2 e assim sucessivamente, então quando quiser tirar algum item tenho que 
    // botar o número que vou tirar.
    
    // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })



})