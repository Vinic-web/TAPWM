module.exports = function(app){
   app.get('/informacao/professores', function(req,res){
       const sql = require ('mssql');
 
       const sqlConfig = {
           user: 'DS2612035', //7 últimos dígitos do seu RA
           password: 'GustaGol22',
           database: 'LP2', 
           server: 'Apolo',
           options: {
               encrypt: false,
               trustServerCertificate: true,
           }
       }
  
// 
      async function getProfessores() {
          try {
              const pool = await sql.connect(sqlConfig);
          
               const results = await pool.request().query('SELECT * from PROFESSORES')
          
               //res.json(results.recordset);
 
                res.render('informacao/professores',{profs: results.recordset})
    
           } catch (err) {
               console.log(err)
          }
       }
      getProfessores();
   });
}