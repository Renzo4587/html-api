import Express from "express";

const routes = Express.Router()

let lista = ['Wagner', 'Wagner 2','Wagner 3: A Origem', 'Wagner: De Volta Ao Lar', 'Wagner: Londe de Casa', 'Wagner: Guerra Civil', 'Wagner: A Maldição do Pérola Negra', 'Wagner: Espírito de Vingança','Wagner: Jogos Vorazes']

routes.get('/',(req,res)=>{
    return res.status(200).json(lista)
})

routes.get('/:produto', (req, res) => {
    const { produto } = req.params;
    try {
      const nome_existe = lista.find(item => item === produto);
      if (nome_existe) {
        return res.status(200).json('O nome existe');
      } else {
        return res.status(200).json('O nome não existe');
      }
    } catch (error) {
      return res.status(500).json('Erro ao processar a requisição');
    }
  });
export default routes